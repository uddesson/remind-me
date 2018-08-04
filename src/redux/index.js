import { combineReducers } from 'redux';
import { remindersReducer as reminders } from './reminders';

export const rootReducer = combineReducers({ reminders });
