import { Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import superagent from "superagent";

const Home: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["pls"],
    queryFn: async () =>
      await superagent.get("https://jsonplaceholder.typicode.com/todos/1"),
  });
  return (
    <>
      <Button>hello</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Home;
