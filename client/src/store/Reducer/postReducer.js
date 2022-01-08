import { POST,GET,LOGIN,ERROR ,GETALL,PUT} from "../Actions/types";

const initialState = {
    posts: [],
    post:{},
    loading: true,
    isAuthenticate:false,
    error:''
  };
  
 const Reduces = (state = initialState, action) =>{
    const { type, payload } = action;
    switch (type) {
      case POST:
      case LOGIN:
      case GET:
      case PUT :
        return {
          ...state,
          post: {...payload},
          loading: false,
          isAuthenticate:true
        };
      case GETALL:
        return {
          ...state,
          posts: payload,
          loading: false,
          isAuthenticate:true
        };
        case ERROR:
          return {
            ...state,
            loading: true,
            isAuthenticate:false,
            error:payload
          };
      default:
        return state;
    }
  }

  export default Reduces