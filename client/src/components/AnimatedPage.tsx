import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface AnimatedPageProps {
  children: React.ReactNode;
}

const MotionBox = motion(Box);

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <MotionBox
      initial={{
        y: 50,
        scale: 0.95,
        // rotateX: -15,
        transformOrigin: "top",
        opacity: 0,
      }}
      animate={{
        y: 0,
        scale: 1,
        // rotateX: 0,
        transformOrigin: "top",
        opacity: 1,
      }}
      exit={{
        y: -50,
        scale: 0.95,
        transformOrigin: "top",
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.35 }}
      // initial={{
      //   opacity: 0,
      //   scaleY: 0.95,
      //   y: -50,
      //   transformOrigin: "top",
      // }}
      // animate={{
      //   opacity: 1,
      //   scaleY: 1,
      //   y: 0,
      //   transformOrigin: "top",
      // }}
      // exit={{
      //   opacity: 0,
      //   scaleY: 0.5,
      //   y: -50,
      //   transformOrigin: "top",
      // }}
      // transition={{
      //   duration: 0.25,
      // }}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedPage;
