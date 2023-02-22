import axios from "axios";

import { authorizationHeader } from "../utils.js";

const state = {
  user: null,
  user_playlists: null,
  token: null
};

const getters = {
  isPresent: state => !!state.user,
  isAuthorized: state => !!state.token,
  stateUser: state => state.user,
  stateUserPlaylists: state => state.userPlaylists,
  stateToken: state => state.token
};

const actions = {
  async login({commit}, user) {
    let {data} = await axios.post("/login", user);

    commit("setToken", data.token);
  },

  async getMe({commit}) {
    let {data} = await axios.get("/me", {headers: authorizationHeader(state.token)});

    commit("setUser", data);
  },

  async getMePlaylists({commit}) {
    let {data} = await axios.get("/me/playlists", {headers: authorizationHeader(state.token)});

    commit("setUserPlaylists", data);
  },

  async logout({commit}) {
    commit("setUser", null);
    commit("setToken", null);
  }
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setUserPlaylists(state, userPlaylists) {
    state.userPlaylists = userPlaylists;
  },
  setToken(state, token) {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
