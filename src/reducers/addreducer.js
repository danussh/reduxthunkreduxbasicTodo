const initial = {
  data: [],
};
const addreducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "FETCH_DATA":
      return {
        ...state,
        data:[...action.payload]
      };
    default:
      return state;
  }
};
export default addreducer;
