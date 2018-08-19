import { combineReducers } from 'redux'
import homeReducer from '../Types/HomeReducer';


const rootReducer = combineReducers({
  HomeReducer : homeReducer,
})

export default rootReducer