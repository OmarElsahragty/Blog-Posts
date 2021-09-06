import BoomHttpErrors from "./Boom.Error";
import SERVER_ERROR from "./Constants.Error";

// **==========================================================================
// **                                Errors
// **==========================================================================
class Errors {
  constructor() {
    this.http = new BoomHttpErrors();
  }

  errorHandler(err) {
    if (this.http.isHttpError(err)) return this.http.handleError(err);
    return SERVER_ERROR(err);
  }
}

export default new Errors();
