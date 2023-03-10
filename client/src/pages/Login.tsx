import { loginMutationFn } from "@/lib/query/mutation/login";
import {
  formikLoginSchema,
  loginFields,
  loginInitialValues,
  LoginValues,
} from "@/lib/validationSchema/login";
import useUser from "@/store/userStore";
import {
  Button,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import TextFields from "../components/TextFields";

const Login: React.FC = () => {
  const setUser = useUser(state => state.setUser);
  const navigate = useNavigate();
  const { isSuccess, data, isLoading, isError, error, mutate } = useMutation({
    mutationFn: loginMutationFn,
  });
  const token = data?.data.access_token;

  const handleSubmit = (
    values: LoginValues,
    helpers: FormikHelpers<LoginValues>
  ) => {
    mutate(values);
    helpers.resetForm();
  };

  if (isSuccess && token) {
    const { userData, access_token } = data.data;

    setUser({
      ...userData,
      token: access_token,
    });
  }

  return (
    <Container sx={{ mt: 16 }}>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={formikLoginSchema}
        onSubmit={handleSubmit}
      >
        {({ values, touched, errors }) => (
          <Form>
            <Stack gap={1}>
              <Typography sx={{ my: 2 }} variant='h3' component='h1'>
                Log in!
              </Typography>
              <TextFields of={loginFields} errors={errors} touched={touched} />
              <Button type='submit' sx={{ mt: 2 }} variant='contained'>
                I log in!
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      {/* <Snackbar open={isSuccess || isError} autoHideDuration={4000}>
        <Alert severity={isSuccess ? "success" : "error"}>
          {isSuccess ? "You're now logged in!" : <>{error}</>}
        </Alert>
      </Snackbar> */}

      <Typography mt={4}>
        You don't have an account ?{" "}
        <MuiLink component={Link} to='/register'>
          Create one now!
        </MuiLink>
      </Typography>
    </Container>
  );
};

export default Login;
