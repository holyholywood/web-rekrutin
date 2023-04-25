import { setCookies } from "../helpers/cookie";
import API from "./api-client";

class AuthenticationService {
  BASE_AUTH = "/auth";
  async login(email, password) {
    const res = await API.post(this.BASE_AUTH + "/login", { email, password });
    setCookies("r-token", res.authorization.token);
    return res;
  }
  async logout() {
    return await API.post(this.BASE_AUTH + "/logout");
  }
  async register(data, defaultRole = null) {
    return await API.post(this.BASE_AUTH + "/register", {
      ...data,
      role: defaultRole ? defaultRole : "applicant",
    });
  }
}

const Auth = new AuthenticationService();

export default Auth;
