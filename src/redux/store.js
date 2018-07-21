import { createStore } from 'redux';
import { rootReducer as reducer } from './index';

export const store = createStore(reducer, {});
