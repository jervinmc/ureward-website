const mutations = {
    SET_BOOK_USER: (state, payload) => {
    state.book = payload;
    var filteredData = payload.filter(item=>item.status=='Confirmed' || item.status=='Pending')[0]
    if(filteredData.length!=0){
        state.book_details['date'][0] = filteredData['date_start']
        state.book_details['date'][1] = filteredData['date_end']
        state.book_details['created_date'] = filteredData['created_date']
        state.book_details['points'] = filteredData['points']
        state.book_details['total'] = filteredData['total']
        state.book_details['guest'] = filteredData['guest']
        state.book_details['status'] = filteredData['status']
        state.book_details['reference_code'] = filteredData['reference_code']
    }
  },
}
  export default mutations;
  