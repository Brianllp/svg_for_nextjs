import { countReducer } from './redux/my_button/count_reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './root_reducers';

export const store = createStore(
  countReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
