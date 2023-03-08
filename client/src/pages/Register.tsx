import TextFields from "@/components/TextFields";
import { registerMutationFn } from "@/lib/query/mutation/register";
import {
  formikRegisterSchema,
  registerFields,
  registerInitialValues,
  RegisterValues,
} from "@/lib/validationSchema/register";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Field, Formik, FormikHelpers } from "formik";

const Register: React.FC = () => {
  const registerMutation = useMutation({
    mutationFn: registerMutationFn,
  });

  const handleSubmit = (
    values: RegisterValues,
    helpers: FormikHelpers<RegisterValues>
  ) => {
    registerMutation.mutate(values);
  };

  return (
    <Container>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={formikRegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ values, touched, errors }) => (
          <Stack mt={8} gap={1}>
            <Typography sx={{ my: 2 }} variant='h3' component='h1'>
              Register
            </Typography>
            <TextFields of={registerFields} errors={errors} touched={touched} />
            <Button sx={{ mt: 2 }} variant='contained'>
              I register now!
            </Button>
          </Stack>
        )}
      </Formik>
      {registerMutation.isSuccess && "success! you registered"}
    </Container>
  );
};

export default Register;
