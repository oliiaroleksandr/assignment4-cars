import { Navigate } from "react-router-dom";

const NotFoundPage = () => {
  return <Navigate to="/dashboard" replace />;
};

export default NotFoundPage;
