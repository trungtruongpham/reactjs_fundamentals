//@ts-ignore
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import { PATHS } from "./paths";

const HomeRoutes = () => {
     return (
       <Switch>
         <Route exact path={PATHS.HOME}>
           <Home></Home>
         </Route>
       </Switch>
     );
   };

export default HomeRoutes;