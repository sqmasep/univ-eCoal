import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

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
      <CardActionArea component={Link} to={`/tags/${name}`}>
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
          <Typography variant='h4' component='h2'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TagCard;
