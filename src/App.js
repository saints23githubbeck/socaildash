import React from 'react';
import "./App.css";
import Signin from "./pages/auth/Signin";
import Forgot from "./pages/auth/Forgot";
import Resetpassword from "./pages/auth/Resetpassword";
import Signup from "./pages/auth/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AdminDashboard,
  Coupons,
  Facebook,
  FacebookAds,
  GoogleAds,
  Instagram,
  InstagramAds,
  Integration,
  Linkedin,
  LinkedinAds,
  Order,
  Plan,
  Settings,
  Twitter,
  TwitterAds,
  User,
  UserDashboard,
  Youtube,
  YoutubeAds,
} from "./pages";
import AdminProfile from './pages/Dashboard/Admin/Components/AdminProfile';
import UserView from './pages/Dashboard/Admin/Components/UserView';
import AddUser from './pages/Dashboard/Admin/Components/AddUser';
import EditUser from './pages/Dashboard/Admin/Components/EditUser';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/reset" element={<Resetpassword />} />
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/admin/users" element={<User />} />
        <Route exact path="/admin/coupons" element={<Coupons />} />
        <Route exact path="/admin/orders" element={<Order />} />
        <Route exact path="/admin/plans" element={<Plan />} />
        <Route exact path="/admin/settings" element={<Settings />} />
        <Route exact path="/user/Dashboard" element={<UserDashboard />} />
        <Route exact path="/ads/facebook" element={<FacebookAds />} />
        <Route exact path="/ads/twitter" element={<TwitterAds />} />
        <Route exact path="/ads/google" element={<GoogleAds />} />
        <Route exact path="/ads/instagram" element={<InstagramAds />} />
        <Route exact path="/ads/linkedin" element={<LinkedinAds />} />
        <Route exact path="/ads/youtube" element={<YoutubeAds />} />
        <Route exact path="/socials/facebook" element={<Facebook />} />
        <Route exact path="/socials/twitter" element={<Twitter />} />
        <Route exact path="/socials/instagram" element={<Instagram />} />
        <Route exact path="/socials/linkedin" element={<Linkedin />} />
        <Route exact path="/socials/youtube" element={<Youtube />} />
        <Route exact path="/integration" element={<Integration />} />
        <Route exact path="/admin/adminprofile" element={<AdminProfile />} />
        <Route exact path="/admin/user/view" element={<UserView />} />
        <Route exact path="/admin/user/edit" element={<EditUser />} />
        <Route exact path="/admin/user/add" element={<AddUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
