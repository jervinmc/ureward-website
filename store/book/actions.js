const actions = {
    async addBook({ commit },  book ) {
      book.status='Pending'
      const response = await this.$axios.$post(
        "/book/",
        book
      );
      response.book = book;
    },
    async editUser({ commit },  customer ) {
      console.log(customer)
      const response = await this.$axios.$put(
        `/users/${customer.id}/`,
        customer
      );
      response.customer = customer;
    },
    async viewBookUser({ commit }, ) {
        const response = await this.$axios.$get(
          "/book-user/"
        );
        commit("SET_BOOK_USER", response);
      },
  };
  
  export default actions;
  