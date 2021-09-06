import BaseController from "./Base.Controller";
import { postsPackage } from "../../../app/packages";

// **==========================================================================
// **                             Posts Controller
// **==========================================================================
class PostsController extends BaseController {
  showPosts = async (req, res, next) => {
    const data = await this.exec(next, postsPackage.showPosts, req.query);
    if (data) return this.okRes(req, res, data);
  };
}
export default new PostsController();
