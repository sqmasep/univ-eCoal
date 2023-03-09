import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface TagCardProps {
  name: string;
  image: string;
}

const TagCard: React.FC<TagCardProps & React.ComponentProps<typeof Card>> = ({
  image,
  name,
  ...props
}) => {
  return (
    <Card {...props}>
      {image && (
        <CardMedia
          image={image}
          component='img'
          height='250'
          sx={{
            borderBottom: theme => theme.styling.outline(1),
          }}
        />
      )}
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default TagCard;
