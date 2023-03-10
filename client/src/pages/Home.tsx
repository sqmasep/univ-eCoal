import List from "@/components/List";
import ArticlePreview from "@/components/ui/ArticlePreview";
import Category from "@/components/ui/Category";
import TagCard from "@/components/ui/TagCard";
import { articles } from "@/lib/query/articles";
import { tags } from "@/lib/query/tags";
import useUser from "@/store/userStore";
import { Container, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const Home: React.FC = () => {
  const user = useUser(state => state.user);
  const {
    data,
    isLoading: isArticlesLoading,
    isError,
  } = useQuery(articles.keys.all, articles.queries.all);

  const { data: tagsData, isLoading: isTagsLoading } = useQuery(
    tags.keys.all,
    tags.queries.all
  );

  const mostViewed = data?.data.sort((a, b) => b.viewCount - a.viewCount);
  const topMostViewed = mostViewed?.slice(0, 5);
  const mostRecent = data?.data.sort(
    (a, b) => (new Date(b.created_at) as any) - (new Date(a.created_at) as any)
  );
  const topMostRecent = mostRecent?.slice(0, 5);

  return (
    <Container sx={{ mt: 16 }}>
      <Typography mb={8} variant='h1' fontFamily='Lexend' fontWeight={300}>
        Welcome back{user && ` ${user.name}`}!
      </Typography>

      <Category
        isLoading={isArticlesLoading}
        mt={10}
        perView={1.1}
        name='Popular articles'
        data={topMostViewed}
      >
        {article => (
          <ArticlePreview
            sx={{ m: 2 }}
            articleId={article.id}
            image={article.thumbnailURL}
            title={article.title}
            views={article.viewCount}
            createdAt={article.created_at}
          />
        )}
      </Category>

      <Category
        isLoading={isTagsLoading}
        perView={1.2}
        name='Popular categories'
        data={tagsData?.data}
        mt={10}
      >
        {tag => <TagCard sx={{ m: 2 }} name={tag.name} image={tag.image} />}
      </Category>
      <Category
        isLoading={isArticlesLoading}
        perView={1.2}
        data={topMostRecent}
        name='Most recents'
        mt={10}
      >
        {recent => (
          <ArticlePreview
            sx={{ m: 2 }}
            articleId={recent.id}
            title={recent.title}
            image={recent.thumbnailURL}
            views={recent.viewCount}
            createdAt={recent.created_at}
          />
        )}
      </Category>

      <Stack gap={2} mt={10}>
        <Typography mb={4} variant='h4' component='h2'>
          All articles
        </Typography>
        {data?.data && (
          <List of={data.data} gap={4} gridKey={article => article.id}>
            {article => (
              <ArticlePreview
                articleId={article.id}
                image={article.thumbnailURL}
                title={article.title}
                views={article.viewCount}
                createdAt={article.created_at}
              />
            )}
          </List>
        )}
      </Stack>
    </Container>
  );
};

export default Home;
