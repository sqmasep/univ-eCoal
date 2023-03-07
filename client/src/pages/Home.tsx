import Category from "@/components/ui/Category";
import { Button, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const Home: React.FC = () => {
  return (
    <Container>
      <Button>hello</Button>
      <Category name='Popular articles' />
    </Container>
  );
};

export default Home;
