const actions = {
  async add({ commit },  data ) {
    const response = await this.$axios.$post(
      "/restaurant/",
      data
    );
    response.data = data;
  },
  async edit({ commit },  data ) {
    const response = await this.$axios.$put(
      `/restaurant/${data.id}/`,
      data
    );
    response.data = data;
  },
  async view({ commit }, ) {
      const response = await this.$axios.$get(
        "/restaurant/"
      );
      commit("SET_EVENT", response);
    },
    async delete({ commit }, data) {
      const response = await this.$axios.$delete(
        `/restaurant/${data.id}/`
      );
      // commit("SET_EVENT", response);
    },
};

export default actions;
