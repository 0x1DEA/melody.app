import axios from "axios";

import { defineStore } from "pinia";

import { Token, tokenTypeFromModel, type TokenType } from "@/models/token";
import type { UserData } from "@/models/userData";
import { authorizationHeader } from "../utils";

interface State {
    token: TokenType | null;
}

export const useTokenStore = defineStore(
    "token",
    {
        state: (): State => (
            {
                token: null,
            }
        ),
        getters: {
            authorized: (state) => state.token != null,
            stateToken: (state) => {
                const token = state.token;

                if (token == null) {
                    throw new Error("token is not present");
                }

                return new Token(token);
            },
        },
        actions: {
            async login(userData: UserData) {
                let {data} = await axios.post("/login", userData);

                let token = tokenTypeFromModel(data);

                this.setToken(token);
            },
            async refresh() {
                let token = this.stateToken;

                let {data} = await axios.post(
                    "/refresh", null, {headers: authorizationHeader(token)}
                );

                let new_token = tokenTypeFromModel(data);

                this.setToken(new_token);
            },
            async logout() {
                let token = this.stateToken;

                this.removeToken();

                await axios.post("/logout", null, {headers: authorizationHeader(token)});
            },
            setToken(token: TokenType) {
                this.token = token;
            },
            removeToken() {
                this.token = null;
            },
        },
        persist: true,
    }
)
