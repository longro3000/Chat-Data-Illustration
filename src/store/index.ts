import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import ChatReducer from './chat/reducers';
import rootSaga from './sagas';
import FormReducer from './form/reducers';

const rootReducer = combineReducers({
    chat: ChatReducer,
    form: FormReducer
});

const init: rootState = {
    chat: {
      chatSummary: null
    },
    form: {
      startDate: '',
      endDate: '',
      accessToken: ''
    }
};


export type rootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    let initialState;
    const loadedState = localStorage.getItem('state');
    if ( loadedState !== null) {
        initialState = JSON.parse(loadedState);
    } else 
        initialState = init;
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [thunkMiddleware, sagaMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(middleWareEnhancer)
    );
    sagaMiddleware.run(rootSaga)

    return store;
} 