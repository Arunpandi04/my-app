import { fireEvent, render } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Register from "./Register";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { createProfile, getProfile } from "../../store/Actions/postAction";
import Dashboard from "../Dashboard/Dashboard";
import axios from '../../store/custom-axios';

import React, { useState as useStateMock } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

jest.mock('../../store/custom-axios', () => {
  return {
    post: jest.fn(),
    get: jest.fn(),
  };
});

const response = {
  success: true,
  statusCode: 200,
  data: {
    _id: "61a4ab018ba40873e6e48c7e",
    firstName: "",
    lastName: "",
    gender: "",
    dob: null,
    address: "",
    email: "arun@gmail.com",
    createdAt: "2021-11-29T10:27:13.326Z",
    updatedAt: "2021-11-29T10:27:13.326Z",
    __v: 0,
  },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzaCIsImRhdGEiOiJhcnVuQGdtYWlsLmNvbSIsImlhdCI6MTYzODI0ODQwN30.b1ZfJXZ5wwjHQ37z_H82cHLodkZ1rHZiiddLxKwq3Bo",
  message: "login success",
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
// const setup = (name) => {
//     const utils = render(
//         <Provider store={store}>
//     <Register />
//     </Provider>
//     )

//     const input = utils.getByPlaceholderText(name)
//     return {
//         input,
//         ...utils,
//     }
// }
describe("Register component", () => {
  const setState = jest.fn();
  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
    axios.post.mockResolvedValue(response)
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Register component input filed", async () => {
    const store = mockStore({post:{loading:true}});
    const util = render(
      <Provider store={store}>
        <Register />
      </Provider>
    )
    
    act(() => {
      const fillOutField = (value, name) => {
        const input = util.getByPlaceholderText(name);
        fireEvent.change(input, { target: { value } });
      };
      fillOutField("Arun", "firstName");
    });
    expect(setState).toHaveBeenCalledTimes(2);
  });
  it("renders Register component submit button", async () => {
    const store = mockStore({post:{loading:true}});
    const util = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    const btn = util.getByText("submit");
    fireEvent.click(btn);
    expect(store.dispatch(createProfile({ email: "arun@gmail.com" })))
      .toHaveBeenCalled;
  });
  it("renders Register component Date picker", async () => {
    const store = mockStore({post:{loading:true}});
    const util = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    const btn = util.getByPlaceholderText("DOB");
    fireEvent.change(btn, { target: { value: "2018-01-04" } });
    expect(setState).toHaveBeenCalledTimes(2);
  });
  it("renders Register component Date picker", async () => {
    const store = mockStore({post:{loading:false,posts:{data:{_id : "sjafajfd"}}}});
    const util = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    expect(setState).toHaveBeenCalledTimes(1);
  });
});
