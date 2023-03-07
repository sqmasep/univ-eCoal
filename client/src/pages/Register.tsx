import {
  formikRegisterSchema,
  registerInitialValues,
  RegisterValues,
} from "@/lib/validationSchema/register";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik, FormikHelpers } from "formik";

const Register: React.FC = () => {
  // const registerMutation = useMutation();

  const handleSubmit = (
    values: RegisterValues,
    helpers: FormikHelpers<RegisterValues>
  ) => {
    // registerMutation.mutate()
  };
  return (
    <>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={formikRegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field as={TextField} name='email' />
          <Field as={TextField} name='password' />
          <Field as={TextField} name='confirmPassword' />
        </Form>
      </Formik>
    </>
  );
};

export default Register