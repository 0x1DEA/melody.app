import {useStore} from "vuex";

export const isApp = () => {
  return Boolean(window.__TAURI_METADATA__);
}

export const isAuthorized = () => {
  return useStore().getters.isAuthorized;
}
