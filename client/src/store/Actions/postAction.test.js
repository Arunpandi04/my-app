import {createProfile,getProfile} from './postAction'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import moxios from 'moxios';
import { POST,GET } from "./types";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {};
describe('user Post Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

it('should dispatch actions with the correct type for post', async() => {
    const response = {
            success: true,
            statusCode: 200,
            data: {
                id: "61a4ab018ba40873e6e48c7e",
                firstName: "",
                lastName: "",
                gender: "",
                dob: null,
                address: "",
                email: "arun@gmail.com",
                createdAt: "2021-11-29T10:27:13.326Z",
                updatedAt: "2021-11-29T10:27:13.326Z",
                __v: 0
            },
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzaCIsImRhdGEiOiJhcnVuQGdtYWlsLmNvbSIsImlhdCI6MTYzODI0ODQwN30.b1ZfJXZ5wwjHQ37z_H82cHLodkZ1rHZiiddLxKwq3Bo",
            message: "login success"
        }
      // moxios.stubRequest('http://localhost:3000/login', {
      //   status: 200,  // <-- you can replace this with a 5xx to test failure cases
      //   response: response,
      // });

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: response,
        });
      });
      const store = mockStore(initialState);
      return store.dispatch(createProfile({email:"arun@gmail.com"})).then(() => {
      let action = store.getActions();
      console.log("POST action",action[0])
      expect(action[0].type).toBe(POST)
    });  
})

it('should dispatch actions with the correct type for post', async() => {
  const response = {
          success: true,
          statusCode: 200,
          data: {
              id: "61a4ab018ba40873e6e48c7e",
              firstName: "",
              lastName: "",
              gender: "",
              dob: null,
              address: "",
              email: "arun@gmail.com",
              createdAt: "2021-11-29T10:27:13.326Z",
              updatedAt: "2021-11-29T10:27:13.326Z",
              __v: 0
          },
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzaCIsImRhdGEiOiJhcnVuQGdtYWlsLmNvbSIsImlhdCI6MTYzODI0ODQwN30.b1ZfJXZ5wwjHQ37z_H82cHLodkZ1rHZiiddLxKwq3Bo",
          message: "login success"
      }
    // moxios.stubRequest(`http://localhost:3000/user/${"61a4ab018ba40873e6e48c7e"}`, {
    //   status: 200,  // <-- you can replace this with a 5xx to test failure cases
    //   response: response,
    // });
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: response,
      });
    });
    const store = mockStore(initialState);
    return store.dispatch(getProfile()).then(() => {
    let action = store.getActions();
    console.log("jbk",action)
    expect(action[0].type).toBe(GET)
  });  
})

})