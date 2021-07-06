//@ts-ignore
import { Switch, Route } from "react-router-dom";
import PostDetail from "../pages/PostDetail";
import Posts from "../pages/Posts";
import { PATHS } from "./paths";

const PostsRoutes = () => {
  return (
    <Switch>
      <Route exact path={PATHS.POSTS}>
        <Posts></Posts>
      </Route>
      <Route exact path={PATHS.DETAIL}>
        <PostDetail></PostDetail>
      </Route>
    </Switch>
  );
};

export default PostsRoutes;
