import { articles } from "@/lib/query/articles";
import { article } from "@/lib/query/mutation/articles";
import { Delete } from "@mui/icons-material";
import { Card, CardContent, IconButton, Stack } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";

const AdminArticles: React.FC = () => {
  const { data } = useQuery(articles.keys.all, articles.queries.all);
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

interface AdminArticleProps {
  articleId: number;
  title: string;
  image: string;
}

const Article: React.FC<AdminArticleProps> = ({ title, image, articleId }) => {
  const deleteMutation = useMutation({
    mutationFn: article.delete,
  });

  const handleDelete = () => {
    deleteMutation.mutate(articleId);
  };

  return (
    <Card>
      <CardContent>
        <Stack direction='row' gap={1} justifyContent='space-between'>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AdminArticles;
