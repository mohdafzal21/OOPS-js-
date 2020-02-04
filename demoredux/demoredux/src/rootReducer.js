import {combineReducers} from 'redux'
import toggleReducer from './reducer'
import {Counterreducer} from './Counter/Counterreducer'

export const rootReducer = combineReducers({
    toggleReducer,
    Counterreducer
})
