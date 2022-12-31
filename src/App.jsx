import { Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNavBar";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import LoginSingup from "./pages/LoginSingup";

export default function App() {
  return (
    <div className="grid grid-cols-[15rem,_1fr]">
      <SideNavBar />
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/items" element={<Items />} />
        <Route path="/login-or-singup" element={<LoginSingup />} />
      </Routes>
    </div>
  );
}
