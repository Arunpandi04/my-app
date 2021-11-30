
const initialState = {
    posts: [],
    loading: true,
  };
  
 const Reduces = (state = initialState, action) =>{
    const { type, payload } = action;
    switch (type) {
      case 'POST':
        return {
          ...state,
          posts: payload,
          loading: false,
        };
        case 'GET':
        return {
          ...state,
          posts: payload,
          loading: false,
        };
      default:
        return state;
    }
  }

  export default Reduces