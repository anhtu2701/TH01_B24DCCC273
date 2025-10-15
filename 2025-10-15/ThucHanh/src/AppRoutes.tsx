import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Bai1 from "./pages/bai1";
import Bai2 from "./pages/bai2";
import Bai3 from "./pages/bai3";
import DetailStudent from "./pages/bai2/detail";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bai1" element={<Bai1 />} />
        <Route path="/bai2" element={<Bai2 />} />
        <Route path="/bai2/:id" element={<DetailStudent />} />
        <Route path="/bai3" element={<Bai3 />} />
    </Routes>
);

export default AppRoutes;
