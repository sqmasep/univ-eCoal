import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { articles } from "@/lib/query/articles";
import { article } from "@/lib/query/mutation/articles";
import { Delete } from "@mui/icons-material";
import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToggle } from "react-use";

const AdminArticles: React.FC = () => {
  const { data } = useQuery(articles.keys.all, articles.queries.all);
  return (
    <>
      <Stack gap={4}>
        {data?.data.map(article => (
          <Article
            articleId={article.id}
            image={article.thumbnailURL}
            title={article.title}
          />
        ))}
      </Stack>
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
  const [dialogOpen, toggleDialog] = useToggle(false);
  const deleteMutation = useMutation({
    mutationFn: article.delete,
  });

  const handleDelete = () => {
    deleteMutation.mutate(articleId);
  };

  return (
    <Card>
      <CardContent>
        <Stack direction='row' gap={1} justifyContent='end'>
          <IconButton onClick={() => toggleDialog(true)}>
            <Delete />
          </IconButton>
        </Stack>
        <Typography variant='h4' component='h2'>
          {title}
        </Typography>
      </CardContent>
      <ConfirmDialog
        open={dialogOpen}
        toggle={toggleDialog}
        title={`Delete the article "${title}"?`}
        description='You will lost this article forever!'
        confirm={handleDelete}
      />
    </Card>
  );
};

export default AdminArticles;
