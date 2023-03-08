import { tags } from "@/lib/query/tags";
import { Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { blue } from "@mui/material/colors";

const Search: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    tags.keys.all,
    tags.queries.all
  );
  return (
    <>
      <Typography variant='h3' component='h1'>
        Search
      </Typography>
      {data?.data.map(tag => (
        <Chip
          sx={{ backgroundColor: blue[100] }}
          key={tag.id}
          label={tag.name}
          component={Link}
          to={`/tags/${tag.name}`}
        />
      ))}
    </>
  );
};

export default Search;
