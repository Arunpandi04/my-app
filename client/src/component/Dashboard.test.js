import { fireEvent, render } from '@testing-library/react';
import { act } from "@testing-library/react-hooks";
import Dashboard from './Dashboard'
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { createProfile, getProfile } from '../store/Actions/postAction'
import moxios from 'moxios';

import React, { useState as useStateMock } from 'react';


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({});
// const setup = (name) => {
//     const utils = render(
//         <Provider store={store}>
//     <Dashboard />
//     </Provider>
//     )

//     const input = utils.getByPlaceholderText(name)
//     return {
//         input,
//         ...utils,
//     }
// }
describe('Dashboard component', () => {
    const setState = jest.fn();
    beforeEach(() => {
        moxios.install()
        useStateMock.mockImplementation(init => [init, setState])
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

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: response,
            });
          });
    });
    afterEach(() => {
        moxios.uninstall()
        jest.clearAllMocks();
    });

    test('renders Dashboard component input filed', async () => {
        const util = render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        )
        act(() => {
            const fillOutField = (value, name) => {
                const input = util.getByPlaceholderText(name)
                fireEvent.change(input, { target: { value } })
            }
            fillOutField("Arun", "firstName")
        })
        expect(setState).toHaveBeenCalledTimes(2)
    })
    it('renders Dashboard component submit button', async () => {
        const util = render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        )
               const btn = util.getByText("submit")
        fireEvent.click(btn)
        expect(store.dispatch(createProfile({ email: "arun@gmail.com" }))).toHaveBeenCalled
    })
    it('renders Dashboard component Date picker', async () => {
        const util = render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        )
        const btn = util.getByPlaceholderText("DOB")
        fireEvent.change(btn, {target: { value: "2018-01-04" }})
        expect(setState).toHaveBeenCalledTimes(2)
    })
})