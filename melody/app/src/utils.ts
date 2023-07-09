import { useSelfStore } from "@/store/modules/self";

export const isApp = () => {
    // @ts-ignore
    return Boolean(window.__TAURI_METADATA__);
}

export const isAuthorized = () => {
    return useSelfStore().authorized;
}
