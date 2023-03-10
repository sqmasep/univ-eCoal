import MediaHandler from "@/components/MediaHandler";
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
      <Typography mb={2} variant='h2' component='h1'>
        {article?.title}
      </Typography>
      <img src={article?.thumbnailURL} style={{ maxWidth: "100%" }} />

      {article?.mediaType && article?.mediaURL && (
        <MediaHandler type={article?.mediaType} url={article?.mediaURL} />
      )}
    </Container>
  );
};

export default Article;
