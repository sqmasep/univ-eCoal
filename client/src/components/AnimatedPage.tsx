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
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedPage;
