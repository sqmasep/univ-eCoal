import LowerNav from "./LowerNav";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <LowerNav />
      {children}
    </>
  );
};

export default Layout;
