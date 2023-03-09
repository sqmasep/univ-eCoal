import ConfirmDialog from "@/components/ui/ConfirmDialog";
import Loading from "@/components/ui/Loading";
import { queryClient } from "@/lib/query/client";
import { tag } from "@/lib/query/mutation/tag";
import { tags } from "@/lib/query/tags";
import { Add, Close, Delete } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useToggle } from "react-use";

interface CreateTagForm {
  name: string;
}

const AdminTags: React.FC = () => {
  const { data, isLoading } = useQuery(tags.keys.all, tags.queries.all);
  const [createTag, toggleCreate] = useToggle(false);
  const createMutation = useMutation({
    mutationFn: tag.create,
  });

  const handleCreate = (
    values: CreateTagForm,
    helpers: FormikHelpers<CreateTagForm>
  ) => {
    console.log("create tag");
    createMutation.mutate(values);
    helpers.resetForm();
    toggleCreate(false);
    queryClient.invalidateQueries(tags.keys.all);
  };

  return (
    <>
      <Stack direction='row' justifyContent='end'>
        <Button
          onClick={() => toggleCreate(true)}
          startIcon={<Add />}
          variant='contained'
        >
          New category
        </Button>
      </Stack>
      <Stack mt={4} gap={4}>
        {data?.data.length ? (
          data.data.map(tag => (
            <AdminTag key={tag.id} name={tag.name} tagId={tag.id} />
          ))
        ) : isLoading ? (
          <Loading loading />
        ) : (
          <Typography>No categories yet! :(</Typography>
        )}
      </Stack>
      <Dialog open={createTag}>
        <Stack alignItems='end'>
          <IconButton onClick={() => toggleCreate(false)}>
            <Close />
          </IconButton>
        </Stack>
        <Formik initialValues={{ name: "" }} onSubmit={handleCreate}>
          <Form>
            <Typography mb={2} variant='h4' component='p'>
              Create a new category
            </Typography>
            <Field
              sx={{ my: 2 }}
              as={TextField}
              fullWidth
              name='name'
              label='Category name'
            />

            <Button sx={{ mt: 2 }} type='submit' variant='contained' fullWidth>
              Create
            </Button>
          </Form>
        </Formik>
      </Dialog>
    </>
  );
};

interface AdminTagProps {
  tagId: number;
  name: string;
}

const AdminTag: React.FC<AdminTagProps> = ({ name, tagId }) => {
  const [deleteDialog, toggleDelete] = useToggle(false);

  const deleteMutation = useMutation({
    mutationFn: tag.delete,
  });

  const handleDelete = () => {
    deleteMutation.mutate(tagId);
    queryClient.invalidateQueries(tags.keys.all);
  };
  return (
    <Card>
      <CardContent>
        <Stack alignItems='end'>
          <IconButton onClick={() => toggleDelete()}>
            <Delete />
          </IconButton>
        </Stack>
        <Typography variant='h4' component='h3'>
          {name}
        </Typography>
      </CardContent>
      <ConfirmDialog
        open={deleteDialog}
        toggle={toggleDelete}
        title={`Delete tag "${name}"?`}
        description='This will be deleted forever!'
        onConfirm={handleDelete}
      />
    </Card>
  );
};

export default AdminTags;
