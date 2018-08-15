import { createSelector } from 'reselect'

// Acions
const ADD_REMINDER = 'remindme/reminders/ADD_REMINDER';
const UPDATE_REMINDERS = 'remindme/reminders/UPDATE_REMINDERS';
const SELECT_REMINDER = 'remindme/reminders/SELECT_REMINDER';
const DESELECT_REMINDER = 'remindme/reminders/DESELECT_REMINDER';
const DELETE_ALL_REMINDERS = 'remindme/reminders/DELETE_ALL_REMINDERS';
const TOGGLE_MODAL = 'remindme/reminders/TOGGLE_MODAL';

// Reducer
const INITIAL_STATE = {
  showModal: false,
  reminders: [],
  selectedReminder: null,
};

export const remindersReducer = (state: any = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      }
    case UPDATE_REMINDERS:
      return {
        ...state,
        reminders: action.payload,
      }
    case DELETE_ALL_REMINDERS:
      return {
        ...state,
        reminders: [],
      }
    case SELECT_REMINDER:
      return {
        ...state,
        selectedReminder: action.payload,
        showModal: true,
      }
    case DESELECT_REMINDER:
    return {
      ...state,
      selectedReminder: null,
    }
    case TOGGLE_MODAL:
    return {
      ...state,
      showModal: !state.showModal,
    }
    default:
      return state;
  }
};


// Selectors
const reminders = state => state.reminders.reminders;

export const passedReminders = createSelector(
  reminders,
  (reminders) => reminders.filter(reminder => new Date(reminder.time) < new Date())
  .sort(function(a, b){
    return a.time < b.time;
  })
);

export const upcomingReminders = createSelector(
  reminders,
  (reminders) => reminders.filter(reminder => new Date(reminder.time) > new Date())
  .sort(function(a, b){
    return a.time > b.time;
  })
);


// Action creators
export const addReminder = (reminder) => ({ type: ADD_REMINDER, payload: reminder });
export const updateReminders = (reminders) => ({ type: UPDATE_REMINDERS, payload: reminders });
export const deleteAllReminders = () => ({ type: DELETE_ALL_REMINDERS })
export const selectReminder = (reminder) => ({ type: SELECT_REMINDER, payload: reminder });
export const deselectReminder = () => ({ type: DESELECT_REMINDER });
export const toggleModal = () => ({ type: TOGGLE_MODAL });
