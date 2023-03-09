import ArticlePreview from "@/components/ui/ArticlePreview";
import Category from "@/components/ui/Category";
import Loading from "@/components/ui/Loading";
import { articles } from "@/lib/query/articles";
import { Button, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { If } from "react-if";

const Home: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    articles.keys.all,
    articles.queries.all
  );

  const mostViewed = data?.data.sort(article => article.viewCount);
  data?.data[0].viewCount;

  return (
    <Container sx={{ mt: 12 }}>
      <Loading loading={isLoading} />
      {mostViewed && (
        <Category name='Popular articles' data={mostViewed}>
          {item => <ArticlePreview title={item.title} />}
        </Category>
      )}
      <pre>{JSON.stringify(mostViewed, null, 2)}</pre>
    </Container>
  );
};

export default Home;
