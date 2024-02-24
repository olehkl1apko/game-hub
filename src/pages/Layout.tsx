import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { NavBar } from "@/components";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
