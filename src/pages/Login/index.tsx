import { Box } from "@mui/material";
import { Footer, Header, LoginForm } from "./components";
import { useAuth } from "@/shared/providers";
import { Navigate } from "react-router-dom";

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
        <LoginForm />
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;
