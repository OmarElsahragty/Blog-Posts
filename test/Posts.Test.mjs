import supertest from "supertest";
import chai, { expect } from "chai";
import chaiSorted from "chai-sorted";
import Dotenv from "dotenv";

Dotenv.config();
chai.use(chaiSorted);
const request = supertest(`127.0.0.1:${process.env.PORT}`);

// ***********************************************************************************************
// *                                       Posts Response
// ***********************************************************************************************

describe("GET /api/posts?tags=tech,design,history,startups,health,politics,culture", () => {
  it('It should responds with, {"posts": [{"id", "author", "authorId", "popularity", "likes", "reads", "tags"},...]} (JSON) Sorted ascending by id', async () => {
    const response = await request.get(
      "/api/posts?tags=tech,design,history,startups,health,politics,culture"
    );

    expect(response.status).to.eql(200);
    expect(response.body.posts, "no data")
      .to.be.an("array")
      .to.have.lengthOf.above(1);
    response.body.posts.every((post) => {
      expect(post, "wrong data").to.have.all.keys(
        "id",
        "author",
        "authorId",
        "popularity",
        "likes",
        "reads",
        "tags"
      );
    });
    expect(response.body.posts, "not sorting").to.be.ascendingBy("id");
    const duplicates = response.body.posts.reduce(
      (acc, current, index, arr) => {
        const foundIndex = arr.findIndex((item) => item.id === current.id);
        if (foundIndex !== -1 && foundIndex !== index) acc.push(current);
        return acc;
      },
      []
    );
    expect(duplicates, "repeated data").to.have.lengthOf(0);
  });
});

// ***********************************************************************************************
// ***********************************************************************************************

describe("GET /api/posts?tags=health&direction=desc", () => {
  it('It should responds with, {"posts": [{"id", "author", "authorId", "popularity", "likes", "reads", "tags"},...]} (JSON) Sorted descending by id', async () => {
    const response = await request.get("/api/posts?tags=health&direction=desc");

    expect(response.status).to.eql(200);
    expect(response.body.posts, "no data")
      .to.be.an("array")
      .to.have.lengthOf.above(1);
    response.body.posts.every((post) => {
      expect(post, "wrong data").to.have.all.keys(
        "id",
        "author",
        "authorId",
        "popularity",
        "likes",
        "reads",
        "tags"
      );
    });
    expect(response.body.posts, "not sorting").to.be.descendingBy("id");
    const duplicates = response.body.posts.reduce(
      (acc, current, index, arr) => {
        const foundIndex = arr.findIndex((item) => item.id === current.id);
        if (foundIndex !== -1 && foundIndex !== index) acc.push(current);
        return acc;
      },
      []
    );
    expect(duplicates, "repeated data").to.have.lengthOf(0);
  });
});

// ***********************************************************************************************
// ***********************************************************************************************

describe("GET /api/posts?tags=politics,history&sortBy=likes&direction=asc", () => {
  it('It should responds with, {"posts": [{"id", "author", "authorId", "popularity", "likes", "reads", "tags"},...]} (JSON) Sorted ascending by likes', async () => {
    const response = await request.get(
      "/api/posts?tags=politics,history&sortBy=likes&direction=asc"
    );

    expect(response.status).to.eql(200);
    expect(response.body.posts, "no data")
      .to.be.an("array")
      .to.have.lengthOf.above(1);
    response.body.posts.every((post) => {
      expect(post, "wrong data").to.have.all.keys(
        "id",
        "author",
        "authorId",
        "popularity",
        "likes",
        "reads",
        "tags"
      );
    });
    expect(response.body.posts, "not sorting").to.be.ascendingBy("likes");
    const duplicates = response.body.posts.reduce(
      (acc, current, index, arr) => {
        const foundIndex = arr.findIndex((item) => item.id === current.id);
        if (foundIndex !== -1 && foundIndex !== index) acc.push(current);
        return acc;
      },
      []
    );
    expect(duplicates, "repeated data").to.have.lengthOf(0);
  });
});

// ***********************************************************************************************
// ***********************************************************************************************

describe("GET /api/posts?tags=politics,history&sortBy=reads&direction=desc", () => {
  it('It should responds with, {"posts": [{"id", "author", "authorId", "popularity", "likes", "reads", "tags"},...]} (JSON) Sorted ascending by reads', async () => {
    const response = await request.get(
      "/api/posts?tags=politics,history&sortBy=reads&direction=desc"
    );

    expect(response.status).to.eql(200);
    expect(response.body.posts, "no data")
      .to.be.an("array")
      .to.have.lengthOf.above(1);
    response.body.posts.every((post) => {
      expect(post, "wrong data").to.have.all.keys(
        "id",
        "author",
        "authorId",
        "popularity",
        "likes",
        "reads",
        "tags"
      );
    });
    expect(response.body.posts, "not sorting").to.be.descendingBy("reads");
    const duplicates = response.body.posts.reduce(
      (acc, current, index, arr) => {
        const foundIndex = arr.findIndex((item) => item.id === current.id);
        if (foundIndex !== -1 && foundIndex !== index) acc.push(current);
        return acc;
      },
      []
    );
    expect(duplicates, "repeated data").to.have.lengthOf(0);
  });
});

// ***********************************************************************************************
// ***********************************************************************************************

describe("GET /api/posts?tags=history&sortBy=popularity&direction=asc", () => {
  it('It should responds with, {"posts": [{"id", "author", "authorId", "popularity", "likes", "reads", "tags"},...]} (JSON) Sorted ascending by popularity', async () => {
    const response = await request.get(
      "/api/posts?tags=history&sortBy=popularity&direction=asc"
    );

    expect(response.status).to.eql(200);
    expect(response.body.posts, "no data")
      .to.be.an("array")
      .to.have.lengthOf.above(1);
    response.body.posts.every((post) => {
      expect(post, "wrong data").to.have.all.keys(
        "id",
        "author",
        "authorId",
        "popularity",
        "likes",
        "reads",
        "tags"
      );
    });
    expect(response.body.posts, "not sorting").to.be.ascendingBy("popularity");
    const duplicates = response.body.posts.reduce(
      (acc, current, index, arr) => {
        const foundIndex = arr.findIndex((item) => item.id === current.id);
        if (foundIndex !== -1 && foundIndex !== index) acc.push(current);
        return acc;
      },
      []
    );
    expect(duplicates, "repeated data").to.have.lengthOf(0);
  });
});

// ***********************************************************************************************
// *                                       Posts Errors
// ***********************************************************************************************

describe("GET /api/posts?sortBy=popularity&direction=asc", () => {
  it('It should responds with Error, {"error": "Tags parameter is required"} (JSON) status: 400', async () => {
    const response = await request.get(
      "/api/posts?sortBy=popularity&direction=asc"
    );

    expect(response.status, "not handled error").to.eql(400);
    expect(response.body.error, "wrong error data").to.eql(
      "Tags parameter is required"
    );
  });
});

// ***********************************************************************************************
// ***********************************************************************************************

describe("GET /api/posts?tags=history,&sortBy=popularity&direction=asc", () => {
  it('It should responds with Error, {"error": "Tags parameter is invalid" (JSON) status: 400', async () => {
    const response = await request.get(
      "/api/posts?tags=history,&sortBy=popularity&direction=asc"
    );

    expect(response.status, "not handled error").to.eql(400);
    expect(response.body.error, "wrong error data").to.eql(
      "Tags parameter is invalid"
    );
  });
});

// ***********************************************************************************************
// ***********************************************************************************************

describe("GET /api/posts?tags=,history&sortBy=popularity&direction=asc", () => {
  it('It should responds with Error, {"error": "Tags parameter is invalid" (JSON) status: 400', async () => {
    const response = await request.get(
      "/api/posts?tags=,history&sortBy=popularity&direction=asc"
    );

    expect(response.status, "not handled error").to.eql(400);
    expect(response.body.error, "wrong error data").to.eql(
      "Tags parameter is invalid"
    );
  });
});

// ***********************************************************************************************
// ***********************************************************************************************

describe("GET /api/posts?tags=design,startups&sortBy=author&direction=desc", () => {
  it('It should responds with Error, {"error": "SortBy parameter is invalid" (JSON) status: 400', async () => {
    const response = await request.get(
      "/api/posts?tags=design,startups&sortBy=author&direction=desc"
    );

    expect(response.status, "not handled error").to.eql(400);
    expect(response.body.error, "wrong error data").to.eql(
      "SortBy parameter is invalid"
    );
  });
});

// ***********************************************************************************************
// ***********************************************************************************************

describe("GET /api/posts?tags=design,startups&sortBy=id&direction=des", () => {
  it('It should responds with Error, {"error": "Direction parameter is invalid" (JSON) status: 400', async () => {
    const response = await request.get(
      "/api/posts?tags=design,startups&sortBy=id&direction=des"
    );

    expect(response.status, "not handled error").to.eql(400);
    expect(response.body.error, "wrong error data").to.eql(
      "Direction parameter is invalid"
    );
  });
});

// ***********************************************************************************************
// ***********************************************************************************************

describe("GET /api/posts?tags=science,&sortBy=author&direction=des", () => {
  it('It should responds with Error, {"error": "Tags parameter is invalid and SortBy parameter is invalid and Direction parameter is invalid" (JSON) status: 400', async () => {
    const response = await request.get(
      "/api/posts?tags=science,&sortBy=author&direction=des"
    );

    expect(response.status, "not handled error").to.eql(400);
    expect(response.body.error, "wrong error data").to.eql(
      "Tags parameter is invalid and SortBy parameter is invalid and Direction parameter is invalid"
    );
  });
});
