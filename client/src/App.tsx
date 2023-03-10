import { Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import theme from "./lib/mui/theme";
import {
  useRoutes,
  useLocation,
  RouteObject,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AnimatePresence, motion } from "framer-motion";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./components/ui/Layout";
import Profile from "./pages/Profile";
import AnimatedPage from "./components/AnimatedPage";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Search from "./components/ui/Search";
import useUser, { Utils } from "./store/userStore";
import Article from "./pages/Article";
import { User } from "./db";
import Admin from "./pages/Admin";
import "swiper/css";
import "swiper/css/pagination";
import Logo from "./components/ui/Logo";

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
    element: (
      <AnimatedPage>
        <Article />
      </AnimatedPage>
    ),
  },
  {
    path: "/tags/:tag",
    element: (
      <AnimatedPage>
        <CategoryPage />
      </AnimatedPage>
    ),
  },
  {
    path: "/search",
    element: (
      <AnimatedPage>
        <Search />
      </AnimatedPage>
    ),
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

const MotionStack = motion(Stack);

const App: React.FC = () => {
  const user = useUser(state => state.user);

  const element = useRoutes(routes(user));
  const location = useLocation();

  if (!element) return null;

  return (
    <Box my={16}>
      <ReactQueryDevtools position='top-right' initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <MotionStack
          position='fixed'
          width='100%'
          height='100%'
          top={0}
          left={0}
          sx={{
            backgroundColor: theme => theme.palette.primary.main,
            zIndex: 99999,
          }}
          alignItems='center'
          justifyContent='center'
          initial={{ clipPath: "circle(200% at 50% -50%)" }}
          animate={{
            clipPath: "circle(10% at 50% -50%)",
            transition: {
              duration: 0.5,
              delay: 1,
            },
          }}
        >
          <Logo />
        </MotionStack>
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
