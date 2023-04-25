import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./components/UI/AppNavbar";
import MainPage from "./components/pages/MainPage";
import { Content } from "antd/es/layout/layout";
import UserProfileMenu from "./components/UI/UserProfileMenu";
import OrderHistory from "./components/pages/OrderHistory";
import MainPage2 from "./components/pages/MainPage2";
import SignIn from "./components/UI/SignIn";
import SignUp from "./components/UI/SignUp";
import Profile from "./components/pages/Profile";

function App(): JSX.Element {
  return (
    <>
      <AppNavbar />
      {/* <Content style={{ width: "100%" }}> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/orders" element={<OrderHistory />} />
      </Routes>
      {/* </Content> */}
    </>
  );
}
export default App;
