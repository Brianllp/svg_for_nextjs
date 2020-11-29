import { countReducer } from './redux/my_button/count_reducer';
import { createStore } from 'redux';

export const store = createStore(countReducer);
