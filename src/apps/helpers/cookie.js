import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { cookieOption } from "../plugins/next-cookie";

function setCookies(key, value) {
  setCookie(key, value, cookieOption);
}

function getCookies(key) {
  return getCookie(key);
}

function deleteCookies(key) {
  deleteCookie(key);
}

export { setCookies, getCookies, deleteCookies };
