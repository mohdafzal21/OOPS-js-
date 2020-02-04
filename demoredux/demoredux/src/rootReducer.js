import {combineReducers} from 'redux'
import toggleReducer from './reducer'
import {Counterreducer} from './Counter/Counterreducer'
import {userReducer} from './Github/userReducer'
export const rootReducer = combineReducers({
    toggleReducer,
    Counterreducer,
    userReducer
})
