import { tags } from "@/lib/query/tags";
import { Chip, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { articles } from "@/lib/query/articles";
import { useDebounce } from "react-use";
import { If } from "react-if";
import ArticlePreview from "./ArticlePreview";

const Search: React.FC = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const {
    data: tagsData,
    isLoading,
    isError,
  } = useQuery(tags.keys.all, tags.queries.all);

  const [, cancel] = useDebounce(
    () => {
      setDebouncedSearch(search);
    },
    500,
    [search]
  );

  const isSearching = search.length !== debouncedSearch.length;

  const { data: searchResults } = useQuery(
    articles.keys.bySearch(debouncedSearch),
    articles.queries.bySearch(debouncedSearch),
    {
      enabled: !!debouncedSearch?.length,
    }
  );
  return (
    <Container>
      <pre>{JSON.stringify(searchResults?.data, null, 2)}</pre>
      <pre>{JSON.stringify(debouncedSearch, null, 2)}</pre>
      <pre>{JSON.stringify(search, null, 2)}</pre>

      <Typography variant='h3' component='h1'>
        Search
      </Typography>

      <TextField
        fullWidth
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <If condition={isSearching}>
        <Typography>Searching...</Typography>
      </If>
      {tagsData?.data.map(tag => (
        <Chip
          sx={{ backgroundColor: blue[100] }}
          key={tag.id}
          label={tag.name}
          component={Link}
          to={`/tags/${tag.name}`}
        />
      ))}
      {searchResults?.data.map(result => (
        <ArticlePreview articleId={result.id} title={result.title} />
      ))}
    </Container>
  );
};

export default Search;
