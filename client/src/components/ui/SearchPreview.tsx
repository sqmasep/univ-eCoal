import { Card, CardContent, Typography } from "@mui/material";

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
      <CardContent>
        <Typography variant='h4' component='h2'>
          {title}
        </Typography>
        id: {articleId}
      </CardContent>
    </Card>
  );
};

export default SearchPreview;
