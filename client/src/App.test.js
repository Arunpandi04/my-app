import { render } from "@testing-library/react";
import App from "./App";
import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test("renders learn react link", () => {
  const store = mockStore({});
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  //expect(getByTestId('button-up')).toBeInTheDocument;
});
