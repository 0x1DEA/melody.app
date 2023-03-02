const TOKEN_TYPE = "Bearer";

export function authorizationHeader(token) {
  return {"Authorization": `${TOKEN_TYPE} ${token}`};
}
