// @flow

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxCookiesMiddleware, { getStateFromCookies } from 'redux-cookies-middleware';
import reducers from './src/reducers/index';

export default (initialState: ?Object = {
    user: {
        user: {},
        token: null,
    }
}) => {
    const paths = {
        'user.token': { name: 'clinic_token' },
        'user.user.login': { name: 'clinic_login' }
    };
    
    const initialStateWithCookies = getStateFromCookies(initialState, paths);
    
    const middleware = [
        thunk,
        reduxCookiesMiddleware(paths)
    ];
    
    return createStore(
        reducers,
        initialStateWithCookies,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
};
