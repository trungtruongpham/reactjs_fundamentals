//@ts-ignore
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import { PATHS } from "./paths";

const LoginRoutes = () => {
  return (
    <Switch>
      <Route exact path={PATHS.LOGIN}>
        <Login></Login>
      </Route>
    </Switch>
  );
};

export default LoginRoutes;
