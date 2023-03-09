import { Stack, TextField } from "@mui/material";
import { Field, FormikErrors, FormikTouched } from "formik";

interface FieldMap {
  name: string;
  label: string;
}

interface TextFieldsProps<T extends FieldMap> {
  of: T[];
  touched: Record<string, boolean>;
  errors: Record<string, string>;
}

const TextFields = <T extends FieldMap>({
  of,
  errors,
  touched,
}: TextFieldsProps<T>) => {
  return (
    <>
      {of.map(field => (
        <Field
          key={field.name}
          as={TextField}
          label={field.label}
          error={!!(touched[field.name] && errors[field.name])}
          helperText={touched[field.name] && errors[field.name]}
          name={field.name}
          fullWidth
        />
      ))}
    </>
  );
};

export default TextFields;
