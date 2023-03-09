import { CssBaseline, Stack, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "./lib/mui/theme";
import { useRoutes, useLocation, RouteObject } from "react-router-dom";
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
import useUser from "./store/userStore";

const routes: (isConnected: boolean) => RouteObject[] = isConnected => [
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
  const { user } = useUser(
    state => ({
      user: state.user,
    }),
    shallow
  );

  const theUser = useQuery(
    ["user", "me"],
    async () =>
      axios.get("/user", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }),
    {
      enabled: !!user?.token,
    }
  );
  console.log("theuser: ", theUser);

  const element = useRoutes(routes(!!user));
  const location = useLocation();

  if (!element) return null;

  return (
    <>
      <ReactQueryDevtools position='top-right' initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <AnimatePresence mode='wait'>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
