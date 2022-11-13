import { createPost } from "./create";

const title = "test-title";
const body = "test-body";

const post = {
  title: title,
  body: body,
};

const fetchSuccess = () => {
  return Promise.resolve({
    ok: true,
    status: 201,
    statustext: "Ok",
    json: () => Promise.resolve({ ...post }),
  });
};

describe("Create a post", () => {
  it("Will create a post if fed with valid input", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const result = await createPost(title, body);
    expect(result).toEqual(post);
    expect(result.title).toEqual(title);
    expect(result.body).toEqual(body);
  });
});
