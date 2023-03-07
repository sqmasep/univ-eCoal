import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export interface ArticlePreviewProps {
  image: string;
  title: string;
  description: string;
  createdAt: string;
}

const ArticlePreview: React.FC<
  ArticlePreviewProps & React.ComponentProps<typeof Card>
> = ({ description, image, title, createdAt, ...props }) => {
  return (
    <Card {...props}>
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
