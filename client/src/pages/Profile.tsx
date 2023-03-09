import useUser from "@/store/userStore";
import { Logout } from "@mui/icons-material";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { If } from "react-if";
import { shallow } from "zustand/shallow";

const Profile: React.FC = () => {
  const { user, logOut } = useUser(
    state => ({ user: state.user, logOut: state.logOut }),
    shallow
  );

  return (
    <Container>
      <If condition={user?.name}>
        <Typography variant='h2' fontWeight={300} component='h1'>
          Welcome, {user?.name}
        </Typography>
      </If>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>pls</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={logOut}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Container>
  );
};

export default Profile;
