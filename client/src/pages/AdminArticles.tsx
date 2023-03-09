import ConfirmDialog from "@/components/ui/ConfirmDialog";
import Loading from "@/components/ui/Loading";
import { articles } from "@/lib/query/articles";
import { queryClient } from "@/lib/query/client";
import { article } from "@/lib/query/mutation/articles";
import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  IconButton,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import { useToggle } from "react-use";

const AdminArticles: React.FC = () => {
  const { data, isLoading } = useQuery(articles.keys.all, articles.queries.all);
  const [createDialog, toggleCreate] = useToggle(false);
  const createMutation = useMutation({
    mutationFn: article.create,
  });

  const handleCreate = () => {
    createMutation.mutate({});
  };

  return (
    <>
      <Stack direction='row' justifyContent='end'>
        <Button
          onClick={() => toggleCreate()}
          startIcon={<Add />}
          variant='contained'
        >
          New article
        </Button>
      </Stack>
      <Stack mt={4} gap={4}>
        {data?.data.length ? (
          data.data.map(article => (
            <Article
              key={article.id}
              articleId={article.id}
              image={article.thumbnailURL}
              title={article.title}
            />
          ))
        ) : isLoading ? (
          <Loading loading />
        ) : (
          <Typography>No articles yet! :(</Typography>
        )}
      </Stack>
      <Dialog open={createDialog}>
        <Formik initialValues={{}} onSubmit={handleCreate}>
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <Form>
              <Stack>
                <Field as={TextField} name='title' label='Title' />
                <Button
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // value={}
                  // name='file'
                  variant='contained'
                  component='label'
                >
                  Upload media
                  <input hidden type='file' accept='image/*' />
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Dialog>
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
  const [deleteDialogOpen, toggleDelete] = useToggle(false);
  const [editDialogOpen, toggleEdit] = useToggle(false);

  const deleteMutation = useMutation({
    mutationFn: article.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(articles.keys.all);
    },
  });

  const editMutation = useMutation({
    mutationFn: article.update(articleId),
  });

  const handleDelete = () => {
    deleteMutation.mutate(articleId);
  };

  const handleEdit = () => {
    console.log("edited");
    // editMutation.mutate();
  };

  return (
    <Card>
      <CardContent>
        <Stack direction='row' gap={1} justifyContent='end'>
          <IconButton onClick={() => toggleEdit(true)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => toggleDelete(true)}>
            <Delete />
          </IconButton>
        </Stack>
        <Typography variant='h4' component='h2'>
          {title}
        </Typography>
      </CardContent>
      <ConfirmDialog
        open={deleteDialogOpen}
        toggle={toggleDelete}
        title={`Delete the article "${title}"?`}
        description='You will lost this article forever!'
        onConfirm={handleDelete}
      />
      <Dialog open={editDialogOpen}>
        <Formik initialValues={{ title }} onSubmit={handleEdit}>
          <Form>
            <Field
              as={TextField}
              name='title'
              label='Title'
              defaultValue={title}
            />
          </Form>
        </Formik>
      </Dialog>
    </Card>
  );
};

export default AdminArticles;
