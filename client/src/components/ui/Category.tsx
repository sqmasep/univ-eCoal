import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticlePreview from "./ArticlePreview";

interface CategoryProps<T> {
  perView?: number;
  name: string;
  data: T[];
  children: (item: T, index: number, arr: T[]) => React.ReactNode;
}

const Category = <T,>({
  name,
  data,
  perView = 1.2,
  children,
  ...props
}: CategoryProps<T> & Omit<React.ComponentProps<typeof Box>, "children">) => {
  return data.length ? (
    <Box {...props}>
      <Typography variant='h4' component='p'>
        {name}
      </Typography>
      <Swiper
        slidesPerView={perView}
        spaceBetween={1}
        style={{ overflow: "none" }}
      >
        {data.map((item, index, arr) => (
          <SwiperSlide key={index}>{children(item, index, arr)}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  ) : null;
};

export default Category;
