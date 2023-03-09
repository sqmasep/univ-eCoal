import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";

interface ConfirmDialogProps {
  title: string;
  description: string;
  open: boolean;
  toggle: (nextValue?: any) => void;
  confirm: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  description,
  title,
  open,
  toggle,
}) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{description}</DialogContent>
      <DialogActions>
        <Stack direction='row' gap={2}>
          <Button onClick={() => toggle(false)}>No! cancel!</Button>
          <Button
            variant='contained'
            onClick={() => {
              confirm();
              toggle(false);
            }}
          >
            Yes, confirm
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
