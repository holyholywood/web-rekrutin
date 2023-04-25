const cookieOption = {
  domain: process.env.BASE_URL,
  sameSite: "lax",
  secure: false,
  maxAge: 60 * 60 * 24 * 30, // Set cookie to one month
  path: "/",
};

export { cookieOption };
