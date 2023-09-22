import { Route, Routes, useLocation } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Turmas } from "../pages/Turmas";

export const MainRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/turmas" element={<Turmas/>} />
    </Routes>
  );
};
