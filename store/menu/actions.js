const actions = {
  async add({ commit },  data ) {
    const response = await this.$axios.$post(
      "/restaurant_menu/",
      data
    );
    response.data = data;
  },
  async edit({ commit },  data ) {
    const response = await this.$axios.$put(
      `/restaurant_menu/${data.id}/`,
      data
    );
    response.data = data;
  },  
  async view({ commit }, data ) {
      const response = await this.$axios.$get(
        `/restaurant_menu/?restaurant=${data.id}`
      );
      commit("SET_EVENT", response.data);
    },
    async delete({ commit }, data ) {
      const response = await this.$axios.$delete(
        `/restaurant_menu/${data.id}/`,
      );
      commit("SET_EVENT", response.data);
    },
};

export default actions;
