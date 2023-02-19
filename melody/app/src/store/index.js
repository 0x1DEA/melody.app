import { createStore } from "vuex";
import createPersistedState from "vuex-plugin-persistedstate";

export default createStore({
  plugins: [createPersistedState()]
});
