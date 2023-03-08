import { useToggle } from "react-use";

const useSnackbar = () => {
  const [open, toggleOpen] = useToggle(false);

  return [open, toggleOpen] as const;
};

export default useSnackbar;
