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
  data?.data[0].viewCount;

  return (
    <Container sx={{ mt: 16 }}>
      <Typography
        variant='h3'
        fontFamily='Lexend'
        fontWeight={400}
        component='h1'
      >
        Welcome back{user && ` ${user.name}`}!
      </Typography>
      <Loading loading={isLoading} />
      {topMostViewed && (
        <Category perView={1.7} name='Popular articles' data={topMostViewed}>
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

      {/* <pre>{JSON.stringify(topMostViewed, null, 2)}</pre> */}

      {tagsData && (
        <Category perView={2.4} name='Popular categories' data={tagsData.data}>
          {tag => <TagCard sx={{ m: 2 }} name={tag.name} image={tag.image} />}
        </Category>
      )}
      {/* <pre>{JSON.stringify(mostViewed, null, 2)}</pre> */}
    </Container>
  );
};

export default Home;
