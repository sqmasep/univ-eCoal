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
  onConfirm: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  description,
  title,
  open,
  toggle,
  onConfirm,
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
              onConfirm();
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
