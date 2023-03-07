import { Box, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "@mui/icons-material/Search";

const Overlay: React.FC = () => {
  return (
    <Box position='fixed' bottom={0} right={0} m={4}>
      <Fab LinkComponent={Link} href='/search'>
        <Search />
      </Fab>
    </Box>
  );
};

export default Overlay;
