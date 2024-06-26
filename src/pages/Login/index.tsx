import { Box } from "@mui/material";
import { Footer, Header, LoginForm } from "./components";

const LoginPage = () => {
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
