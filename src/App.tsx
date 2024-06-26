import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import ReviewPage from "./pages/Review";
import LoginPage from "./pages/Login";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Container>
  );
};

export default App;
