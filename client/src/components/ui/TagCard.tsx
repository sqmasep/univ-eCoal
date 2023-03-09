import { Card, CardMedia, Typography } from "@mui/material";

interface TagCardProps {
  name: string;
  image: string;
}

const TagCard: React.FC<TagCardProps> = ({ image, name }) => {
  return (
    <Card>
      <CardMedia image={image} />
      <Typography>{name}</Typography>
    </Card>
  );
};

export default TagCard;
