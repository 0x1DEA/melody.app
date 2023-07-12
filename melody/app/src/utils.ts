import { useSelfStore } from "@/store/modules/self";
import { useTokenStore } from "./store/modules/token";

export const isApp = () => {
    // @ts-ignore
    return Boolean(window.__TAURI_METADATA__);
}

export const isAuthorized = () => {
    return useTokenStore().authorized;
}

export const isLoaded = () => {
    return useSelfStore().loaded;
}
