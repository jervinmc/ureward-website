const actions = {
  async addUser({ commit },  customer ) {
    console.log(customer)
    const response = await this.$axios.$post(
      "/signup/",
      customer
    );
    response.customer = customer;
  },
  async editUser({ commit },  customer ) {
    console.log(customer)
    const response = await this.$axios.$put(
      `/users/${customer.id}/`,
      customer
    );
    response.customer = customer;
  },
};

export default actions;
