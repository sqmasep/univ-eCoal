import Category from "@/components/ui/Category";
import Loading from "@/components/ui/Loading";
import { articles } from "@/lib/query/articles";
import { Button, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const Home: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    articles.keys.all,
    articles.queries.all
  );

  return (
    <Container>
      <Loading loading={isLoading} />

      <Category name='Popular articles' />
    </Container>
  );
};

export default Home;
