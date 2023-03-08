import { loginMutationFn } from "@/lib/query/mutation/login";
import {
  formikLoginSchema,
  loginFields,
  loginInitialValues,
  LoginValues,
} from "@/lib/validationSchema/login";
import useUser from "@/store/userStore";
import {
  Alert,
  Button,
  Container,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import TextFields from "../components/TextFields";

const Login: React.FC = () => {
  const setToken = useUser(state => state.setToken);
  const navigate = useNavigate();
  const { isSuccess, data, isLoading, isError, error, mutate } = useMutation({
    mutationFn: loginMutationFn,
  });
  const token = data?.data.access_token;

  if (isSuccess && token) {
    setToken(token);

    navigate("/");
  }

  const handleSubmit = (
    values: LoginValues,
    helpers: FormikHelpers<LoginValues>
  ) => {
    mutate(values);
    helpers.resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={formikLoginSchema}
        onSubmit={handleSubmit}
      >
        {({ values, touched, errors }) => (
          <Stack mt={8} gap={1}>
            <Typography sx={{ my: 2 }} variant='h3' component='h1'>
              Log in!
            </Typography>
            <TextFields of={loginFields} errors={errors} touched={touched} />
            <Button sx={{ mt: 2 }} variant='contained'>
              I log in!
            </Button>
          </Stack>
        )}
      </Formik>
      <Snackbar open={isSuccess || isError} autoHideDuration={4000}>
        <Alert severity={isSuccess ? "success" : "error"}>
          {isSuccess ? "You're now logged in!" : <>{error}</>}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
