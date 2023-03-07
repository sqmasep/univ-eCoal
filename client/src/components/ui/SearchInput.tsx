import { Field, Form, Formik } from "formik";
import { useDebounce } from "react-use";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = () => {
  //   const debounce = useDebounce();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field as />
      </Form>
    </Formik>
  );
};
