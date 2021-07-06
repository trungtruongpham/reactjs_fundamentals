//@ts-ignore
import { BrowserRouter } from "react-router-dom";
import React from "react";
import HomeRoutes from "./HomeRoutes";
import PostsRoutes from "./PostsRoutes";
import ProfileRoutes from "./ProfileRoutes";
import LoginRoutes from "./LoginRoutes";

const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoutes></HomeRoutes>
      <PostsRoutes></PostsRoutes>
      <ProfileRoutes></ProfileRoutes>
      <LoginRoutes></LoginRoutes>
    </BrowserRouter>
  );
};

export default React.memo(Routes);
