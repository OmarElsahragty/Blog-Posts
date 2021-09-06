import BaseController from "./Base.Controller";

// **==========================================================================
// **           Test Controller (To test if the server is up/down)
// **==========================================================================
class TestsController extends BaseController {
  ping = async (req, res) =>
    this.okRes(req, res, {
      success: true,
    });
}

export default new TestsController();
