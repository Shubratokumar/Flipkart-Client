import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';

// middleware 
const middleware = [ thunk ];

// reducers 
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});
// app store
const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store;