import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { getProductsReducer } from './reducers/productReducer';

// middleware 
const middleware = [ thunk ];

// reducers 
const reducer = combineReducers({
    getProducts: getProductsReducer
});
// app store
const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;