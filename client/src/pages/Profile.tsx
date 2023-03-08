import useUser from "@/store/userStore";
import { Container, Typography } from "@mui/material";

const Profile: React.FC = () => {
  const user = useUser();

  return (
    <Container>
      <Typography variant='h2' fontWeight={300} component='h1'>
        Welcome, {user.name}
      </Typography>
    </Container>
  );
};

export default Profile;
