// Acions
const DELETE_ALL_REMINDERS = 'remindme/reminders/DELETE_ALL_REMINDERS';

const ADD_REMINDER = 'remindme/reminders/ADD_REMINDER';

const UPDATE_REMINDERS = 'remindme/reminders/UPDATE_REMINDERS';
const TOGGLE_MODAL = 'remindme/reminders/TOGGLE_MODAL';

// Reducer
const INITIAL_STATE = {
  showModal: false,
  reminders: [],
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
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      }
    default:
      return state;
  }
};


// Action creators
export const addReminder = (reminder) => ({ type: ADD_REMINDER, payload: reminder });
export const updateReminders = (reminders) => ({ type: UPDATE_REMINDERS, payload: reminders });
export const deleteAllReminders = () => ({ type: DELETE_ALL_REMINDERS })
export const toggleModal = () => ({ type: TOGGLE_MODAL });
