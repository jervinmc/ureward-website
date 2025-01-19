const mutations = {
    ADD_USER: (state, payload) => {
      state.customers.unshift(payload);
    },
  };
  
  export default mutations;
  