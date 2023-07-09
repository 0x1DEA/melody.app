import { Token } from "@/models/token";

export function authorizationHeader(token: Token) {
    return {"Authorization": `${token.tokenType} ${token.token}`};
}
