import { createClient } from "redis";
import Config from "../../../config";

// **==========================================================================
// **                          Redis Cache Connection
// **==========================================================================
export default createClient({
  host: Config.Cache.Host,
  port: Config.Cache.Port,
});
