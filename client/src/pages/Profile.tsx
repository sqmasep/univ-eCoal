import useUser from "@/store/userStore";
import { AdminPanelSettings, Logout } from "@mui/icons-material";
import {
  Avatar,
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
import { Link } from "react-router-dom";
import { shallow } from "zustand/shallow";

const Profile: React.FC = () => {
  const { user, logOut } = useUser(
    state => ({ user: state.user, logOut: state.logOut }),
    shallow
  );

  return (
    <Container sx={{ mt: 16 }}>
      <Stack alignItems='center' gap={4}>
        <Avatar
          sx={{
            width: 150,
            height: 150,
            outline: theme => theme.styling.outline(1),
            boxShadow: theme => theme.styling.shadow(2),
          }}
        />
        <Typography textAlign='center' variant='h2' fontWeight={300}>
          Welcome, {user?.name}
        </Typography>
      </Stack>
      <List sx={{ mt: 4 }}>
        <ListItem disablePadding>
          <ListItemButton onClick={logOut}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </ListItem>
        {user?.role === "ADMIN" && (
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/admin'>
              <ListItemIcon>
                <AdminPanelSettings />
              </ListItemIcon>
              <ListItemText>Espace Admin</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Container>
  );
};

export default Profile;
