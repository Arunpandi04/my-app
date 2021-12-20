
const initialState = {
    posts: [],
    loading: true,
    isAuthenticate:false
  };
  
 const Reduces = (state = initialState, action) =>{
    const { type, payload } = action;
    switch (type) {
      case 'POST':
      case 'LOGIN':
      case 'GET':
        return {
          posts: payload,
          loading: false,
          isAuthenticate:true
        };
        case 'ERROR':
          return {
            ...state,
            loading: true,
            isAuthenticate:false
          };
      default:
        return state;
    }
  }

  export default Reduces