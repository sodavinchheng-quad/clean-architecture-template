const config = {
  apiBaseURL:
    process.env.REACT_APP_API_BASE_URL ??
    "https://jsonplaceholder.typicode.com",
  localStorageAccessTokenKey: "t__access_token",
};

export default config;
