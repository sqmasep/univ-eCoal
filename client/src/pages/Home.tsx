import ArticlePreview from "@/components/ui/ArticlePreview";
import Category from "@/components/ui/Category";
import Loading from "@/components/ui/Loading";
import TagCard from "@/components/ui/TagCard";
import { articles } from "@/lib/query/articles";
import { tags } from "@/lib/query/tags";
import { Button, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { If } from "react-if";

const Home: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    articles.keys.all,
    articles.queries.all
  );

  const { data: tagsData } = useQuery(tags.keys.all, tags.queries.all);

  const mostViewed = data?.data.sort(article => article.viewCount);
  data?.data[0].viewCount;

  return (
    <Container sx={{ mt: 12 }}>
      <Loading loading={isLoading} />
      {mostViewed && (
        <Category name='Popular articles' data={mostViewed}>
          {item => (
            <ArticlePreview
              sx={{ m: 2 }}
              articleId={item.id}
              image={item.thumbnailUrl}
              title={item.title}
            />
          )}
        </Category>
      )}

      {tagsData && (
        <Category perView={2.4} name='Popular categories' data={tagsData.data}>
          {tag => <TagCard sx={{ m: 2 }} name={tag.name} image={tag.image} />}
        </Category>
      )}
      <pre>{JSON.stringify(tagsData, null, 2)}</pre>
    </Container>
  );
};

export default Home;
