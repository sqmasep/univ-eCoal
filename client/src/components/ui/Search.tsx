import { tags } from "@/lib/query/tags";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Search: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    tags.keys.all,
    tags.queries.all
  );
  return (
    <>
      {data?.data.map(tag => (
        <Chip
          key={tag.id}
          label={tag.name}
          component={Link}
          to={`/tags/${tag.name}`}
        />
      ))}
    </>
  );
};
