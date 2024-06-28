import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import ReviewPresentationPage from "./pages/ReviewPresentation";
import LoginPage from "./pages/Login";
import { Container } from "@mui/material";
import {
  ProtectedLayout,
  ProtectedRoute,
  ReviewLayout,
} from "@/shared/components";
import ReviewGalleryPage from "./pages/ReviewGallery";

const App = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
        color: "darkgray",
      }}
    >
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route element={<ReviewLayout />}>
              <Route
                path="/reviewPresentation"
                element={<ReviewPresentationPage />}
              />
              <Route path="/reviewGallery" element={<ReviewGalleryPage />} />
            </Route>
          </Route>
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Container>
  );
};

export default App;
