import { Container, Stack } from "@mui/material";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <Stack
      p={theme => theme.spacing(2)}
      borderBottom={theme => theme.styling.outline(1)}
    >
      <Container>
        <Logo />
      </Container>
    </Stack>
  );
};

export default Navbar;
