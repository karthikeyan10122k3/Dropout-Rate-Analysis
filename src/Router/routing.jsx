import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Register from '../Pages/Registration/Register'
import ContactUs from '../Pages/Home/ContactUs'

const routing = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contactUs" element={<ContactUs />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default routing;
