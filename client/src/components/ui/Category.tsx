import { Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticlePreview from "./ArticlePreview";

interface CategoryProps<T> {
  name: string;
  data: T[];
  children: (item: T, index: number, arr: T[]) => React.ReactNode;
}

const Category = <T,>({ name, data, children }: CategoryProps<T>) => {
  return (
    <>
      <Typography>{name}</Typography>
      <Swiper slidesPerView={1.2} spaceBetween={1} style={{ overflow: "none" }}>
        {data.map((item, index, arr) => (
          <SwiperSlide key={index}>
            {children(item, index, arr)}
            {/* <ArticlePreview
              sx={{ m: 2 }}
              title='title'
              description='description kfdqsjflkdsgsjmld'
              image=''
              createdAt=''
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category;
