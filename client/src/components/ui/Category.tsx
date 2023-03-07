import { Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticlePreview from "./ArticlePreview";

interface CategoryProps {
  name: string;
}

const Category: React.FC<CategoryProps> = ({ name }) => {
  return (
    <>
      <Typography>{name}</Typography>
      <Swiper slidesPerView={1.2} spaceBetween={1} style={{ overflow: "none" }}>
        {[...Array(9).keys()].map(e => (
          <SwiperSlide key={e}>
            <ArticlePreview
              sx={{ m: 2 }}
              title='title'
              description='description kfdqsjflkdsgsjmld'
              image=''
              createdAt=''
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category;
