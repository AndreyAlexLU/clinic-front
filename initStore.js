// @flow

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'root/reducers/index';

export default (initialState: ?Object = undefined) => {
    const middleware = [ thunk ];
    
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
};
