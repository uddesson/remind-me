// Acions
const LOAD_REMINDERS_START = 'remindme/reminders/LOAD_REMINDERS_START';

// Single reminder actions
const ADD_REMINDER = 'remindme/reminders/ADD_REMINDER';
const UPDATE_REMINDER = 'remindme/reminders/UPDATE_REMINDER';
const DELETE_REMINDER = 'remindme/reminders/DELETE_REMINDER';

const TOGGLE_MODAL = 'remindme/reminders/TOGGLE_MODAL';

// Reducer
const INITIAL_STATE = {
  showModal: false,
  reminders: []
};

export const remindersReducer = (state: any = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_REMINDERS_START:
      return {
        ...state,
      };
    case ADD_REMINDER:
      return {
        ...state,
        reminders: reminders.push(action.payload),
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
export const loadReminders = () => ({ type: LOAD_REMINDERS_START, payload });
export const addReminder = (reminder) => ({ type: ADD_REMINDER, payload: reminder});
export const toggleModal = () => ({ type: TOGGLE_MODAL });
