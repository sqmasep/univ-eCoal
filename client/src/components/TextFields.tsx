import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { Field, FormikErrors, FormikTouched } from "formik";
import { useToggle } from "react-use";

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
      {of.map(field => {
        const [showPassword, toggleShowPassword] = useToggle(false);
        const isPassword =
          field.name === "password" || field.name === "confirmPassword";
        return (
          <Field
            key={field.name}
            as={TextField}
            label={field.label}
            error={!!(touched[field.name] && errors[field.name])}
            helperText={touched[field.name] && errors[field.name]}
            name={field.name}
            fullWidth
            type={isPassword ? (showPassword ? "text" : "password") : "text"}
            InputProps={
              isPassword
                ? {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={toggleShowPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : undefined
            }
          />
        );
      })}
    </>
  );
};

export default TextFields;
