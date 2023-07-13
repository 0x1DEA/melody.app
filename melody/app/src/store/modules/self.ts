import axios from "axios";

import { defineStore } from "pinia";
import { PlayerSettings } from "@/models/playerSettings";
import { User } from "@/models/user";
import { UserSettings } from "@/models/userSettings";
import { authorizationHeader } from "@/store/utils";

import { useTokenStore } from "@/store/modules/token";

interface State {
    self: User | null;
    settings: UserSettings | null;
    playerSettings: PlayerSettings | null;
    localPlayerSettings: PlayerSettings | null;
}

export const useSelfStore = defineStore(
    "self",
    {
        state: (): State => (
            {
                self: null,
                settings: null,
                playerSettings: null,
                localPlayerSettings: null,
            }
        ),
        getters: {
            loaded: (state) => state.self != null,
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
        },
        actions: {
            async fetchAll() {
                await this.fetchSelf();
                await this.fetchSettings();
                // await this.fetchPlayerSettings();
            },
            async fetchSelf() {
                let token = useTokenStore().stateToken;

                let {data} = await axios.get("/me", {headers: authorizationHeader(token)});

                let self = User.fromModel(data);

                this.setSelf(self);
            },
            async fetchSettings() {
                let token = useTokenStore().stateToken;

                let {data} = await axios.get("/me/settings", {headers: authorizationHeader(token)});

                let settings = UserSettings.fromModel(data);

                this.setSettings(settings);
            },
            async fetchPlayerSettings() {
                let token = useTokenStore().stateToken;

                let {data} = await axios.get(
                    "/me/player/settings", {headers: authorizationHeader(token)}
                );

                let playerSettings = PlayerSettings.fromModel(data);

                this.setPlayerSettings(playerSettings);
            },
            ensureLocalPlayerSettings() {
                if (this.localPlayerSettings == null) {
                    this.localPlayerSettings = PlayerSettings.default();
                }
            },
            setSelf(self: User) {
                this.self = self;
            },
            setSettings(settings: UserSettings) {
                this.settings = settings;
            },
            setPlayerSettings(playerSettings: PlayerSettings) {
                this.playerSettings = playerSettings;
            },
            removeAll() {
                this.removeSelf();
                this.removeSettings();
                this.removePlayerSettings();
            },
            removeSelf() {
                this.self = null;
            },
            removeSettings() {
                this.settings = null;
            },
            removePlayerSettings() {
                this.playerSettings = null;
            }
        },
    }
)
