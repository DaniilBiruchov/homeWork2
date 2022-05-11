import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { postsReducer } from './PostsReducer'

const rootReducer = combineReducers ({
    postsReducer,
})
    
export const  store = createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))


