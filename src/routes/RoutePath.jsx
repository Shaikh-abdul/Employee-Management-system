import { Route, Routes } from "react-router-dom";
import Home from "../component/hero/Home";
import Login from "../component/login/Login";
import Register from "../component/register/Register";
import AddEmp from "../component/addEmp/AddEmp";
import UpdateEmp from "../component/updateEmp/UpdateEmp";
import AboutUs from "../component/aboutUs/AboutUs";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addEmp" element={<AddEmp />} />
      <Route path="/updateEmp" element={<UpdateEmp />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
}
