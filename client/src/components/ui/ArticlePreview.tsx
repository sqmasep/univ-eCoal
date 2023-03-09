import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface ArticlePreviewProps {
  articleId: number;
  image: string;
  title: string;
  description?: string;
  createdAt?: string;
}

const ArticlePreview: React.FC<
  ArticlePreviewProps & React.ComponentProps<typeof Card>
> = ({ description, articleId, image, title, createdAt, ...props }) => {
  return (
    <Card {...props} component={Link} to={`/articles/${articleId}`}>
      <CardMedia image={image} />
      <CardContent>
        <Typography variant='h3' component='p' gutterBottom>
          {title}
        </Typography>
        <Typography gutterBottom>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ArticlePreview;
