import { articles } from "@/lib/query/articles";
import { Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface ArticleProps {}

const Article: React.FC<ArticleProps> = ({}) => {
  const { articleId } = useParams();

  if (!articleId) return <>error</>;

  const { data: article } = useQuery(
    articles.keys.byId(articleId),
    articles.queries.byId(articleId),
    {
      enabled: !!articleId,
    }
  );
  return (
    <Container sx={{ mt: 16 }}>
      <Typography variant='h2' component='h1'>
        {article?.title}
      </Typography>

      {article?.content}
      <pre>{JSON.stringify(article, null, 2)}</pre>
    </Container>
  );
};

export default Article;
