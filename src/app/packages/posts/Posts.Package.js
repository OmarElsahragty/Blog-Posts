import { Protocols, Sort } from "../../helpers";
import { fetch } from "../../../domain/services";
import LocaleKeys from "../../locales";
import Config from "../../../../config";

// **==========================================================================
// **                              Get Posts
// **==========================================================================
export const showPosts = async ({ tags, sortBy, direction }) => {
  try {
    // Fetch data for each tag in parallel (search in cache if not found make a external api call)
    let posts = [];
    const tagsArray = tags.split(",");
    await Promise.all(
      tagsArray.map(async (tag) => {
        const fetchedData = await fetch(
          `${Config.App.PostsDataSource}?tag=${tag}`
        );
        posts.push(...fetchedData.posts);
      })
    );

    // Response with 404 error if no data
    if (posts.length === 0) {
      return Protocols.appResponse({ err: LocaleKeys.NO_DATA_404 });
    }

    // Remove all the repeated posts
    posts = await Promise.all(
      posts.reduce((accumulator, current) => {
        const found = accumulator.find((item) => item.id === current.id);
        if (!found) accumulator.push(current);
        return accumulator;
      }, [])
    );

    // Sort data
    if (
      tagsArray.length === 1 &&
      direction === "desc" &&
      (!sortBy || sortBy === "id")
    ) {
      posts.reverse();
    } else if (tagsArray.length > 1 || (sortBy && sortBy !== "id")) {
      Sort({
        array: posts,
        sortBy: sortBy || "id",
        isDescending: direction === "desc",
      });
    }

    return Protocols.appResponse({ data: { posts } });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
