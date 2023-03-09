import { Card, Typography } from "@mui/material";

interface SearchPreviewProps {
  articleId: number;
  title: string;
  image: string;
}

const SearchPreview: React.FC<SearchPreviewProps> = ({
  title,
  articleId,
  image,
}) => {
  return (
    <Card>
      <Typography>{title}</Typography>
      id: {articleId}
    </Card>
  );
};

export default SearchPreview;
