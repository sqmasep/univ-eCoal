import { CssBaseline, Stack, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "./lib/mui/theme";
import { useRoutes, useLocation, RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./components/ui/Layout";
import Profile from "./pages/Profile";
import AnimatedPage from "./components/AnimatedPage";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Login from "./pages/Login";
import Search from "./components/ui/Search";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AnimatedPage>
        <Home />
      </AnimatedPage>
    ),
  },
  {
    path: "/articles",
  },
  {
    path: "/articles/:id",
  },
  {
    path: "/tags/:tag",
    element: <CategoryPage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/login",
    element: (
      <AnimatedPage>
        <Login />
      </AnimatedPage>
    ),
  },
  {
    path: "/register",
    element: (
      <AnimatedPage>
        <Register />
      </AnimatedPage>
    ),
  },
  {
    path: "/profile",
    element: (
      <AnimatedPage>
        <Profile />
      </AnimatedPage>
    ),
  },
  {
    path: "*",
    element: (
      <AnimatedPage>
        <NotFound />
      </AnimatedPage>
    ),
  },
];

const App: React.FC = () => {
  const element = useRoutes(routes);
  const location = useLocation();

  if (!element) return null;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position='top-right' initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <AnimatePresence mode='wait'>
              {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
