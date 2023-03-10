import TextFields from "@/components/TextFields";
import { registerMutationFn } from "@/lib/query/mutation/register";
import {
  formikRegisterSchema,
  registerFields,
  registerInitialValues,
  RegisterValues,
} from "@/lib/validationSchema/register";
import useUser from "@/store/userStore";
import {
  Alert,
  Button,
  Container,
  Link as MuiLink,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const setUser = useUser(state => state.setUser);
  const navigate = useNavigate();
  const { isSuccess, data, isLoading, isError, error, mutate } = useMutation({
    mutationFn: registerMutationFn,
  });
  const token = data?.data.access_token;

  const handleSubmit = (
    values: RegisterValues,
    helpers: FormikHelpers<RegisterValues>
  ) => {
    mutate(values);
    helpers.resetForm();
  };

  if (isSuccess && token) {
    const { userData, access_token } = data.data;

    setUser({ ...userData, token: access_token });
  }

  return (
    <Container sx={{ mt: 16 }}>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={formikRegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ values, touched, errors }) => (
          <Form>
            <Stack mt={8} gap={1}>
              <Typography sx={{ my: 2 }} variant='h3' component='h1'>
                Register
              </Typography>
              <TextFields
                of={registerFields}
                errors={errors}
                touched={touched}
              />
              <Button type='submit' sx={{ mt: 2 }} variant='contained'>
                I register now!
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      <Snackbar open={isSuccess || isError} autoHideDuration={4000}>
        <Alert severity={isSuccess ? "success" : "error"}>
          {isSuccess ? "You're now logged in!" : <>{isError && data}</>}
        </Alert>
      </Snackbar>

      <Typography mt={4}>
        Already have an account?{" "}
        <MuiLink component={Link} to='/login'>
          Log in!
        </MuiLink>
      </Typography>
    </Container>
  );
};

export default Register;
