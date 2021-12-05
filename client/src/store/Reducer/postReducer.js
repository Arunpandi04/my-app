
const initialState = {
    posts: [],
    loading: true,
  };
  
 const Reduces = (state = initialState, action) =>{
    const { type, payload } = action;
    switch (type) {
      case 'POST':
      case 'LOGIN':
        case 'GET':
        return {
          ...state,
          posts: payload,
          loading: false,
        };
        case 'ERROR':
          return {
            ...state,
            loading: true,
          };
      default:
        return state;
    }
  }

  export default Reduces