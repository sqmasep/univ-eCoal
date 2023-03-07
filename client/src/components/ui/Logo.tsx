import { Box, Typography } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <Box position='relative'>
      <Box
        position='absolute'
        left='-.5em'
        top='50%'
        sx={{
          aspectRatio: "1",
          width: "1rem",
          transform: "translateY(-50%)",
          borderRadius: "50%",
          zIndex: -1,
          backgroundColor: theme => theme.palette.primary.main,
        }}
      />
      <Typography variant='h6' component='p'>
        doremi
      </Typography>
    </Box>
  );
};

export default Logo;
