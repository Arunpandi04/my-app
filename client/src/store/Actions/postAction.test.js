import { createProfile, getProfile,Loggedin } from './postAction'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { POST, GET, ERROR,LOGIN } from "./types";
import axios from '../custom-axios';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {};
jest.mock('../custom-axios', () => {
  return {
    post: jest.fn(),
    get: jest.fn(),
  };
});
const response = {
  success: true,
  statusCode: 200,
data:
{  data: {
    _id: "61a4ab018ba40873e6e48c7e",
    firstName: "",
    lastName: "",
    gender: "",
    dob: null,
    address: "",
    email: "arun@gmail.com",
    createdAt: "2021-11-29T10:27:13.326Z",
    updatedAt: "2021-11-29T10:27:13.326Z",
    __v: 0
  }
},
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzaCIsImRhdGEiOiJhcnVuQGdtYWlsLmNvbSIsImlhdCI6MTYzODI0ODQwN30.b1ZfJXZ5wwjHQ37z_H82cHLodkZ1rHZiiddLxKwq3Bo",
  message: "login success"
}

describe('user Post Action', () => {
  beforeEach(() => {
    jest.setTimeout('1000ms')
    jest.mock("axios");
  });
  afterEach(() =>{
  jest.clearAllMocks();
  });

  it('should dispatch actions with the correct type for post', async () => {
    // moxios.stubRequest('http://localhost:3000/login', {
    //   status: 200,  // <-- you can replace this with a 5xx to test failure cases
    //   response: response,
    // });

    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 200,
    //     response: response,
    //   });
    // });
    axios.post.mockResolvedValue(response)
    const store = mockStore(initialState);
    return store.dispatch(createProfile({ email: "arun@gmail.com" })).then(() => {
      let action = store.getActions();
      expect(action[0].type).toBe(POST)
    });
  })

  it('should dispatch actions with the correct type for GET', async () => {
    // moxios.stubRequest(`http://localhost:3000/user/${"61a4ab018ba40873e6e48c7e"}`, {
    //   status: 200,  // <-- you can replace this with a 5xx to test failure cases
    //   response: response,
    // });
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 200,
    //     response: response,
    //   });
    // });
    axios.get.mockResolvedValue(response)
     const store = mockStore(initialState);
    return store.dispatch(getProfile("testid")).then(() => {
      let action = store.getActions();
      expect(action[0].type).toBe(GET)
    });
  })
  it('should dispatch actions with the correct type for Error in post', async () => {
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 401,
    //     //response: "response",
    //   });
    // });
    axios.post.mockResolvedValue()
    const store = mockStore(initialState);
    return store.dispatch(createProfile({ email: "arun@gmail.com" })).then(() => {
      let action = store.getActions();
      expect(action[0].type).toBe(ERROR)
    });
  })
  it('should dispatch actions with the correct type for Error in getPost', async () => {
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 401,
    //     //response: "response",
    //   });
    // });

    axios.get.mockResolvedValue()
    const store = mockStore(initialState);
    return store.dispatch(getProfile()).then(() => {
      let action = store.getActions();
      expect(action[0].type).toBe(ERROR)
    });
  })
  it('should dispatch actions with the correct type for Login', async () => {
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 200,
    //     response: response,
    //   });
    // });
    axios.post.mockResolvedValue(response)
    const store = mockStore(initialState);
    return store.dispatch(Loggedin({ email: "arun@gmail.com" })).then(() => {
      let action = store.getActions();
      expect(action[0].type).toBe(LOGIN)
    });
  })
  
  it('should dispatch actions with the correct type for Error in Login', async () => {
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 401,
    //     //response: "response",
    //   });
    // });
    axios.post.mockResolvedValue()
    const store = mockStore(initialState);
    return store.dispatch(Loggedin({ email: "arun@gmail.com" })).then(() => {
      let action = store.getActions();
      expect(action[0].type).toBe(ERROR)
    });
  })
})