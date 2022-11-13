import { logout } from "./logout";
import { save, load } from "../../storage/index.js";

const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("Logout", () => {
  it("Clears localstorage of token when user logs out.", () => {
    save("token", mockToken);
    expect(load("token")).toEqual(mockToken);

    localStorage.setItem("token", mockToken);
    expect(localStorage.getItem("token")).toEqual(mockToken);

    logout();

    expect(load("token")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
