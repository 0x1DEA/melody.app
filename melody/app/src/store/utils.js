const TOKEN_TYPE = "Bearer";

function authorizationHeader(token) {
  return {"Authorization": `${TOKEN_TYPE} ${token}`};
}

export {
  authorizationHeader
};
