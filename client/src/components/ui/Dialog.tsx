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
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  description,
  title,
  open,
}) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{description}</DialogContent>
      <DialogActions>
        <Stack direction='row' gap={1}>
          <Button onClick={() => {}}>No! cancel!</Button>
          <Button onClick={() => {}}>Yes, confirm</Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
