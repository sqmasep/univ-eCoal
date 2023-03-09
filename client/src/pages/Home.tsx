import ArticlePreview from "@/components/ui/ArticlePreview";
import Category from "@/components/ui/Category";
import Loading from "@/components/ui/Loading";
import TagCard from "@/components/ui/TagCard";
import { articles } from "@/lib/query/articles";
import { tags } from "@/lib/query/tags";
import useUser from "@/store/userStore";
import { Button, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { If } from "react-if";

const Home: React.FC = () => {
  const user = useUser(state => state.user);
  const { data, isLoading, isError } = useQuery(
    articles.keys.all,
    articles.queries.all
  );

  const { data: tagsData } = useQuery(tags.keys.all, tags.queries.all);

  const mostViewed = data?.data.sort((a, b) => b.viewCount - a.viewCount);
  const topMostViewed = mostViewed?.slice(0, 5);
  const mostRecent = data?.data.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  const topMostRecent = mostRecent?.slice(0, 5);

  return (
    <Container sx={{ mt: 16 }}>
      <Typography variant='h1' fontFamily='Lexend' fontWeight={300}>
        Welcome back{user && ` ${user.name}`}!
      </Typography>
      <Loading loading={isLoading} />
      {topMostViewed && (
        <Category
          mt={8}
          perView={1.7}
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
      )}

      {tagsData && (
        <Category perView={2.4} name='Popular categories' data={tagsData.data}>
          {tag => <TagCard sx={{ m: 2 }} name={tag.name} image={tag.image} />}
        </Category>
      )}
      {topMostRecent && (
        <Category perView={2.4} data={topMostRecent} name='Most recents'>
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
      )}
    </Container>
  );
};

export default Home;
