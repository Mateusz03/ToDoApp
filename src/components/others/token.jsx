export function setToken(token) {
  sessionStorage.setItem("token", JSON.stringify(token));
  return token;
}

export function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const token = JSON.parse(tokenString);
  return token;
}
