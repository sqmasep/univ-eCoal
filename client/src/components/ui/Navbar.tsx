import useUser from "@/store/userStore";
import { Box, Button, Container, Stack } from "@mui/material";
import { If } from "react-if";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const user = useUser(state => state.user);
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
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          gap={1}
        >
          <Logo />
          <If condition={!user}>
            <Stack direction='row' gap={2}>
              <Button sx={{ px: 2 }} component={Link} to='/login'>
                Log in
              </Button>
              <Button variant='contained' component={Link} to='/register'>
                Sign up
              </Button>
            </Stack>
          </If>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Navbar;
