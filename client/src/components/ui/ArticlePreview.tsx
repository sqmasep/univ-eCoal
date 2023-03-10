import { cardAnimation } from "@/animations/card";
import { formatDate } from "@/utils/dateFormat";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface ArticlePreviewProps {
  articleId: number;
  image: string;
  title: string;
  description?: string;
  views: number;
  createdAt?: string;
  summonTransition?: boolean;
}

const MotionCard = motion(Card);
const ArticlePreview: React.FC<
  ArticlePreviewProps & React.ComponentProps<typeof MotionCard>
> = ({
  description,
  articleId,
  image,
  title,
  createdAt,
  views,
  summonTransition = false,
  ...props
}) => {
  const motionProps = summonTransition
    ? {
        variants: cardAnimation.children,
        initial: "hidden",
        animate: "show",
      }
    : undefined;

  return (
    <MotionCard {...motionProps} {...props}>
      <CardActionArea component={Link} to={`/articles/${articleId}`}>
        {image && (
          <CardMedia
            component='img'
            height='150'
            src={image}
            sx={{
              borderBottom: theme => theme.styling.outline(1),
            }}
          />
        )}
        <CardContent>
          <Typography variant='h5' component='p' gutterBottom>
            {title}
          </Typography>
          <Typography gutterBottom>{description}</Typography>
          <Typography color='gray' variant='caption'>
            {formatDate(createdAt as string)} • {views} views
          </Typography>
        </CardContent>
      </CardActionArea>
    </MotionCard>
  );
};

export default ArticlePreview;
