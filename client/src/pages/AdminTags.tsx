import { tag } from "@/lib/query/mutation/tag";
import { tags } from "@/lib/query/tags";
import { Add, Delete } from "@mui/icons-material";
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
  const { data } = useQuery(tags.keys.all, tags.queries.all);
  const [createTag, toggleCreate] = useToggle(false);
  const createMutation = useMutation({
    mutationFn: tag.create,
  });

  const handleCreate = (
    values: CreateTagForm,
    helpers: FormikHelpers<CreateTagForm>
  ) => {
    createMutation.mutate(values.name);
    helpers.resetForm();
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
        {data?.data.map(tag => (
          <AdminTag key={tag.id} name={tag.name} tagId={tag.id} />
        ))}
      </Stack>
      <Dialog open={createTag}>
        <Formik initialValues={{ name: "" }} onSubmit={handleCreate}>
          <Form>
            <Typography variant='h4' component='p'>
              Create a new category
            </Typography>
            <Field
              sx={{ my: 2 }}
              as={TextField}
              fullWidth
              name='name'
              label='Category name'
            />
            <Button type='submit' variant='contained' fullWidth>
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
  return (
    <Card>
      <CardContent>
        <Stack alignItems='end'>
          <IconButton>
            <Delete />
          </IconButton>
        </Stack>
        <Typography variant='h4' component='h3'>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AdminTags;
