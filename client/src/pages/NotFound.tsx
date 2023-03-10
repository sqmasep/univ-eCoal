import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Container>
      <Stack mt={8} alignItems='center' justifyContent='center'>
        <Typography textAlign='center' variant='h1'>
          Uh oh... page not found!
        </Typography>
        <Button
          size='large'
          sx={{ mt: 4 }}
          variant='contained'
          component={Link}
          to='/'
        >
          Go to homepage!
        </Button>
      </Stack>
    </Container>
  );
};

export default NotFound;
