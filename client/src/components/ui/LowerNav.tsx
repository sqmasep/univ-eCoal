import { Box, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Person, Search } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { If } from "react-if";

interface Link {
  to: string;
  icon: React.ReactNode;
}

const links: Link[] = [
  {
    to: "/",
    icon: <Home />,
  },
  {
    to: "/search",
    icon: <Search />,
  },
  {
    to: "/profile",
    icon: <Person />,
  },
];

const MotionBox = motion(Box);

const LowerNav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <Box
      borderTop={theme => theme.styling.outline(1)}
      position='fixed'
      bottom={0}
      left={0}
      width='100%'
      borderRadius='.5em .5em 0 0'
      overflow='hidden'
    >
      <AnimatePresence>
        <Stack width='100%' direction='row'>
          {links.map(link => {
            const isActive = link.to === pathname;
            // FIXME: fix that terrible link solution pls
            // i was fucking lazy to find a good solution
            // i just wanna progress on some things so we can
            // kinda have a userflow somehow
            return (
              <Stack
                component={Link}
                to={link.to}
                key={link.to}
                position='relative'
                flexBasis='100%'
                py={2}
                justifyContent='center'
                alignItems='center'
              >
                <If condition={isActive}>
                  <MotionBox
                    layoutId='active-lower-nav'
                    position='absolute'
                    sx={{
                      inset: 0,
                      zIndex: -1,
                      backgroundColor: "#ddd9",
                    }}
                  />
                </If>
                <Typography>{link.icon}</Typography>
              </Stack>
            );
          })}
        </Stack>
      </AnimatePresence>
    </Box>
  );
};

export default LowerNav;
