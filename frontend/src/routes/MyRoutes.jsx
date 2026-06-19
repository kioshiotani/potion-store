import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";

export default function MyRoutes() {
    return ( 
    <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Admin />} path="/admin" />
    </Routes> );
}