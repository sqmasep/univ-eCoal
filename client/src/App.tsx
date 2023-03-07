import { CssBaseline, Stack, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "./lib/mui/theme";
import { useRoutes, useLocation, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/ui/Navbar";
import Overlay from "./components/ui/Overlay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
  },
  {
    path: "/articles/:id",
  },
  {
    path: "/tags/:tag",
  },
];

const App: React.FC = () => {
  const element = useRoutes(routes);
  const location = useLocation();

  if (!element) return null;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Overlay />
          <AnimatePresence>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
