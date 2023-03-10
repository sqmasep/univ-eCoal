import { Box, Card, Skeleton, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticlePreview from "./ArticlePreview";

interface CategoryProps<T> {
  perView?: number;
  name: string;
  data: T[] | undefined;
  isLoading?: boolean;
  children: (item: T, index: number, arr: T[]) => React.ReactNode;
}

const Category = <T,>({
  name,
  data,
  perView = 1.2,
  children,
  isLoading = false,
  ...props
}: CategoryProps<T> & Omit<React.ComponentProps<typeof Box>, "children">) => {
  return !isLoading ? (
    data?.length ? (
      <Box {...props}>
        <Typography variant='h4' component='p'>
          {name}
        </Typography>
        <Swiper
          slidesPerView={perView}
          autoplay={{
            delay: 5000,
          }}
          spaceBetween={1}
        >
          {data.map((item, index, arr) => (
            <SwiperSlide key={index}>{children(item, index, arr)}</SwiperSlide>
          ))}
        </Swiper>
      </Box>
    ) : null
  ) : (
    <>
      <Typography variant='h4' component='p'>
        {name}
      </Typography>
      <Swiper
        slidesPerView={perView}
        spaceBetween={1}
        style={{ overflow: "none" }}
      >
        {[...Array(5).keys()].map((item, index, arr) => (
          <SwiperSlide key={index}>
            <Skeleton
              animation='wave'
              variant='rectangular'
              height={300}
              sx={{ m: 2, borderRadius: theme => theme.shape.borderRadius }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category;
