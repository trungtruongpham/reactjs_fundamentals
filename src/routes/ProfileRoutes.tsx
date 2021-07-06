//@ts-ignore
import { Switch, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import { PATHS } from "./paths";

const LoginRoutes = () => {
  return (
    <Switch>
      <Route exact path={PATHS.PROFILE}>
        <Profile></Profile>
      </Route>
    </Switch>
  );
};

export default LoginRoutes;
