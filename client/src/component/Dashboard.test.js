import { fireEvent, render } from '@testing-library/react';
import { act } from "@testing-library/react-hooks";
import Dashboard from './Dashboard'
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { createProfile,getProfile } from '../store/Actions/postAction'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({});
const setup = (name) => {
    console.log("jskd", name)
    const utils = render(
        <Provider store={store}>
    <Dashboard />
    </Provider>
    )

    const input = utils.getByPlaceholderText(name)
    return {
        input,
        ...utils,
    }
}
describe('Dashboard component', () => {
it('renders Dashboard component input filed', async () => {

    act(() => {
        const fillOutField = (value, name) => {
            console.log("fillOutField", name)
            const { input } = setup(name)
            fireEvent.change(input, { target: { value } })
            expect(input.value).toBe("")
        }
        fillOutField("hg", "firstName")
    })
    
});

it('renders Dashboard component submit button', async () => {
    const { getByText } = render(
        <Provider store={store}>
    <Dashboard />
    </Provider>
    )

    const btn=getByText("submit")
    fireEvent.click(btn)
    expect(store.dispatch(createProfile({email:"arun@gmail.com"}))).toHaveBeenCalled
})
})