import Dotenv from "dotenv";

Dotenv.config();

// **==========================================================================
// **         Server configuration (configured in environment file)
// **==========================================================================
export default Object.freeze({
  Port: process.env.PORT * 1,

  Cache: {
    Host:
      process.env.NODE_ENV === "Docker"
        ? process.env.DOCKER_CACHE_HOST
        : process.env.CACHE_HOST,
    Port:
      (process.env.NODE_ENV === "Docker"
        ? process.env.DOCKER_CACHE_PORT
        : process.env.CACHE_PORT) * 1,
  },

  App: {
    PostsDataSource: process.env.POSTS_DATA_SOURCE,
  },
});
