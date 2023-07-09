import axios, { AxiosError } from "axios";

import { defineStore } from "pinia";
import { PlayerSettings } from "@/models/playerSettings";
import { Token } from "@/models/token";
import { User, UserData } from "@/models/user";
import { UserSettings } from "@/models/userSettings";
import { authorizationHeader } from "@/store/utils";

interface State {
    self: User | null;
    token: Token | null;
    settings: UserSettings | null;
    playerSettings: PlayerSettings | null;
    localPlayerSettings: PlayerSettings | null;
    offline: boolean;
}

export const useSelfStore = defineStore(
    "self",
    {
        state: (): State => (
            {
                self: null,
                token: null,
                settings: null,
                playerSettings: null,
                localPlayerSettings: null,
                offline: false,
            }
        ),
        getters: {
            authorized: (state) => state.token != null,
            stateToken: (state) => {
                const token = state.token;

                if (token == null) {
                    throw new Error("token is not present");
                }

                return token;
            },
            stateSelf: (state) => {
                const self = state.self;

                if (self == null) {
                    throw new Error("self is not present");
                }

                return self;
            },
            stateSettings: (state) => {
                const settings = state.settings;

                if (settings == null) {
                    throw new Error("settings are not present");
                }

                return settings;
            },
            statePlayerSettings: (state) => {
                const playerSettings = state.playerSettings;

                if (playerSettings == null) {
                    throw new Error("player settings are not present");
                }

                return playerSettings;
            },
            stateLocalPlayerSettings: (state) => {
                const localPlayerSettings = state.localPlayerSettings;

                if (localPlayerSettings == null) {
                    throw new Error("local player setttings are not present");
                }

                return localPlayerSettings;
            },
            stateOffline: (state) => state.offline,
        },
        actions: {
            async login(userData: UserData) {
                let {data} = await axios.post("/login", userData);

                let token = new Token(data);

                this.setToken(token);
            },
            async logout() {
                let token = this.token;

                this.removeAll();

                if (token == null) {
                    return;
                }

                await axios.post("/logout", null, {headers: authorizationHeader(token)});
            },
            async fetchAll() {
                await this.fetchSelf();
                await this.fetchSettings();
                // await this.fetchPlayerSettings();
            },
            async fetchSelf() {
                let token = this.token;

                if (token == null) {
                    return;
                }

                let {data} = await axios.get("/me", {headers: authorizationHeader(token)});

                let self = new User(data);

                this.setSelf(self);
            },
            async fetchSettings() {
                let token = this.token;

                if (token == null) {
                    return;
                }

                let {data} = await axios.get("/me/settings", {headers: authorizationHeader(token)});

                let settings = new UserSettings(data);

                this.setSettings(settings);
            },
            async fetchPlayerSettings() {
                let token = this.token;

                if (token == null) {
                    return;
                }

                let {data} = await axios.get(
                    "/me/player/settings", {headers: authorizationHeader(token)}
                );

                let playerSettings = new PlayerSettings(data);

                this.setPlayerSettings(playerSettings);
            },
            setSelf(self: User) {
                this.self = self;
            },
            setToken(token: Token) {
                this.token = token;
            },
            setSettings(settings: UserSettings) {
                this.settings = settings;
            },
            setPlayerSettings(playerSettings: PlayerSettings) {
                this.playerSettings = playerSettings;
            },
            removeAll() {
                this.removeToken();
                this.removeSelf();
                this.removeSettings();
                this.removePlayerSettings();
            },
            removeSelf() {
                this.self = null;
            },
            removeToken() {
                this.token = null;
            },
            removeSettings() {
                this.settings = null;
            },
            removePlayerSettings() {
                this.playerSettings = null;
            }
        }
    }
)
