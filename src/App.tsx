import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import ReviewPage from "./pages/ReviewPresentation";
import LoginPage from "./pages/Login";
import { Container } from "@mui/material";
import { Layout, ProtectedRoute } from "@/shared/components";

const App = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
        color: "darkgray"
      }}
    >
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/reviewPresentation" element={<ReviewPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Container>
  );
};

export default App;
