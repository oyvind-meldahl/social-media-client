import { login } from "./login";

const testMail = "testmail@noroff.no";
const testPassword = "testpassword";
const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const user = {
  name: "Tester",
  email: "testmail@noroff.no",
};

class LocalStorageMock {
  constructor() {
    this.value = {};
  }

  clear() {
    this.value = {};
  }

  getItem(key) {
    return this.value[key] || null;
  }

  setItem(key, value) {
    this.value[key] = String(value);
  }

  removeItem(key) {
    delete this.value[key];
  }
}

global.localStorage = new LocalStorageMock();

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK, set to go.",
    json: () => Promise.resolve({ user, mockToken }),
  });
}

function fetchFail() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "No good.",
  });
}

describe("Login", () => {
  it("Will return a token if logged in successfully.", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const result = await login(testMail, testPassword);
    expect(result.mockToken).toEqual(mockToken);
  });

  it("Will fail when provided invalid data.", async () => {
    global.fetch = jest.fn(() => fetchFail());
    await expect(login(testMail, testPassword)).rejects.toThrow("No good.");
  });
});
