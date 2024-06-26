import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import ReviewPage from "./pages/Review";
import LoginPage from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
