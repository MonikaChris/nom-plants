import axios from "axios";

class AuthAPI {
  constructor() {
    this.baseURL = process.env.REACT_APP_SERVER;
  }

  async register(username, password) {
    const config = {
      method: "post",
      baseURL: this.baseURL,
      url: "/api/register",
      withCredentials: true,
      data: {
        username,
        password,
      },
    };

    try {
      await axios(config);
    } catch (error) {
      console.error(error);
    }
  }

  async authorize(username, password) {
    const config = {
      method: "post",
      baseURL: this.baseURL,
      url: "/api/auth",
      withCredentials: true,
      data: {
        username,
        password,
      },
    };

    try {
      await axios(config);
    } catch (error) {
      console.error(error);
    }
  }

  async refresh() {
    const config = {
      method: "get",
      baseURL: this.baseURL,
      url: "/api/refresh",
      withCredentials: true,
    };

    try {
      await axios(config);
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    const config = {
      method: "post",
      baseURL: this.baseURL,
      url: "/api/logout",
      withCredentials: true,
    };

    try {
      await axios(config);
    } catch (error) {
      console.error(error);
    }
  }
}

export default AuthAPI;
