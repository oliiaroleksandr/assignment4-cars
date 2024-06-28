import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import ReviewPresentationPage from "./pages/ReviewPresentation";
import LoginPage from "./pages/Login";
import { Container } from "@mui/material";
import {
  AuthLayout,
  ProtectedLayout,
  ProtectedRoute,
  ReviewLayout,
} from "@/shared/components";
import ReviewGalleryPage from "./pages/ReviewGallery";
import ChangePasswordPage from "./pages/ChangePassword";

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

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/changePassword" element={<ChangePasswordPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
