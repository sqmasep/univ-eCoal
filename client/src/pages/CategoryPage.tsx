import ArticlePreview from "@/components/ui/ArticlePreview";
import Loading from "@/components/ui/Loading";
import { articles } from "@/lib/query/articles";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

const CategoryPage: React.FC = () => {
  const { tag } = useParams();
  const { data, isLoading, isError } = useQuery(
    articles.keys.byTag(tag),
    articles.queries.byTag(tag)
  );

  return (
    <Container sx={{ mt: 16 }}>
      <Typography variant='h2' component='h1'>
        {tag?.replace(tag[0], tag[0].toUpperCase())}
      </Typography>

      {data?.data && !data?.data.length && (
        <>
          <Typography
            mt={4}
            mb={2}
            variant='h3'
            component='h2'
            fontWeight={300}
          >
            No article found! :(
          </Typography>
          <Button variant='contained' component={Link} to='/'>
            Go back to the homepage
          </Button>
        </>
      )}

      <Grid mt={8} container gap={4}>
        {data?.data.map(article => (
          <Grid item key={article.id} lg={3} sm={6} xs={12}>
            <ArticlePreview
              articleId={article.id}
              title={article.title}
              image={article.thumbnailURL}
              views={article.viewCount}
              createdAt={article.created_at}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryPage;
