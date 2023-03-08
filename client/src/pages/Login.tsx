import {
  formikLoginSchema,
  loginInitialValues,
  LoginValues,
} from "@/lib/validationSchema/login";
import { TextField } from "@mui/material";
import { Field, Form, Formik, FormikHelpers } from "formik";

const Login: React.FC = () => {
  const handleSubmit = (
    values: LoginValues,
    helpers: FormikHelpers<LoginValues>
  ) => {};

  return (
    <>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={formikLoginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field as={TextField} label='Email' name='email' />
          <Field as={TextField} label='Password' name='password' />
        </Form>
      </Formik>
    </>
  );
};

export default Login;
