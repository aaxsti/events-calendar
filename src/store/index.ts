import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import reducers from './reducers'
import thunk from 'redux-thunk';

const rootReducer = combineReducers(reducers)

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
