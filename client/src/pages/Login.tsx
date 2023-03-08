import { loginMutationFn } from "@/lib/query/mutation/login";
import {
  formikLoginSchema,
  loginFields,
  loginInitialValues,
  LoginValues,
} from "@/lib/validationSchema/login";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";
import TextFields from "../components/TextFields";

const Login: React.FC = () => {
  const loginMutation = useMutation({
    mutationFn: loginMutationFn,
  });

  const handleSubmit = (
    values: LoginValues,
    helpers: FormikHelpers<LoginValues>
  ) => {
    loginMutation.mutate(values);
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
    </Container>
  );
};

export default Login;
