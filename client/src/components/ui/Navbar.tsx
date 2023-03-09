import { Container, Stack } from "@mui/material";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <Stack
      position='fixed'
      top={0}
      left={0}
      zIndex={theme => theme.zIndex.appBar}
      sx={{
        backgroundColor: theme => theme.palette.background.default,
      }}
      width='100%'
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
