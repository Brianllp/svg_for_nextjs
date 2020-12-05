import { combineReducers } from 'redux'

import { countReducer } from './redux/my_button/count_reducer';

const rootReducer = combineReducers({
  countReducer
})

export default rootReducer
