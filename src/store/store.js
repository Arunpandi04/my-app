import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './Reducer/intialReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const initialState = {}

const middleware = [thunk]

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['post']
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

let persistor = persistStore(store)
export {persistor,store} 
