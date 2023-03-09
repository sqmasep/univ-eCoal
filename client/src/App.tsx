import {
  Box,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import theme from "./lib/mui/theme";
import {
  useRoutes,
  useLocation,
  RouteObject,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { axios, queryClient } from "./lib/query/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./components/ui/Layout";
import Profile from "./pages/Profile";
import AnimatedPage from "./components/AnimatedPage";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Search from "./components/ui/Search";
import { shallow } from "zustand/shallow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useUser, { Utils } from "./store/userStore";
import Article from "./pages/Article";
import { User } from "./db";
import Admin from "./pages/Admin";

const routes: (user: (User & Utils) | null) => RouteObject[] = user => [
  {
    path: "/",
    element: (
      <AnimatedPage>
        <Home />
      </AnimatedPage>
    ),
  },
  {
    path: "/articles/:articleId",
    element: <Article />,
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
    element: !!user ? (
      <Navigate to='/profile' />
    ) : (
      <AnimatedPage>
        <Login />
      </AnimatedPage>
    ),
  },
  {
    path: "/register",
    element: !!user ? (
      <Navigate to='/profile' />
    ) : (
      <AnimatedPage>
        <Register />
      </AnimatedPage>
    ),
  },
  {
    path: "/profile",
    element: !user ? (
      <Navigate to='/login' />
    ) : (
      <AnimatedPage>
        <Profile />
      </AnimatedPage>
    ),
  },
  {
    path: "/admin",
    element: (
      // user?.role !== "ADMIN" ? (
      //   <Navigate to='/profile' />
      // ) : (
      <AnimatedPage>
        <Admin />
      </AnimatedPage>
    ),
    // ),
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
  const user = useUser(state => state.user);

  const element = useRoutes(routes(user));
  const location = useLocation();

  if (!element) return null;

  return (
    <Box my={16}>
      <ReactQueryDevtools position='top-right' initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <AnimatePresence mode='wait'>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </Box>
  );
};

export default App;
