import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../views/layout/header/store'

const reducer = combineReducers ({
  header:headerReducer
})

export default reducer