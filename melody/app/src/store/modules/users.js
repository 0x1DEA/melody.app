import axios from "axios";

const state = {
  user: null,
  token: null
};

const getters = {
  isPresent: state => !!state.user,
  isAuthorized: state => !!state.token,
  stateUser: state => state.user,
  stateToken: state => state.token
};

const actions = {
  async login({commit}, user) {
    let {data} = await axios.post("/login", user);
    commit("setToken", data);
  },

  async getMe({commit}) {
    let {data} = await axios.get("/me");
    commit("setUser", data);
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
