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
          image={
            "https://www.brides.com/thmb/d3wl3Wd5yFcDsVmGJw1U8PvgSlY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-4689705a6c904a688091a7b80f196b07.jpg"
          }
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
