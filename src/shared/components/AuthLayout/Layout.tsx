import { Box } from "@mui/material";
import { useAuth } from "@/shared/providers";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;
