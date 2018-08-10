// Acions
const DELETE_ALL_REMINDERS = 'remindme/reminders/DELETE_ALL_REMINDERS';

const ADD_REMINDER = 'remindme/reminders/ADD_REMINDER';
const UPDATE_REMINDER = 'remindme/reminders/UPDATE_REMINDER';
const DELETE_REMINDER = 'remindme/reminders/DELETE_REMINDER';

const TOGGLE_MODAL = 'remindme/reminders/TOGGLE_MODAL';

// Reducer
const INITIAL_STATE = {
  showModal: false,
  reminders: [],
};

export const remindersReducer = (state: any = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_REMINDER:
    console.log('adding reminder:', action.payload)
      return {
        ...state,
        reminders: [...state.reminders, action.payload]
      }
    case UPDATE_REMINDER:
    console.log('updating reminder:', action.payload)
      return {
        ...state,
        // Update. Same as above..?
      }
    case DELETE_REMINDER:
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
export const updateReminder = (reminder) => ({ type: ADD_REMINDER, payload: reminder });
export const deleteReminder = (id) => ({ type: ADD_REMINDER, payload: id });
export const deleteReminder = (reminders) => ({ type: DELETE_REMINDER, payload: reminders });
export const deleteAllReminders = () => ({ type: DELETE_ALL_REMINDERS })
export const toggleModal = () => ({ type: TOGGLE_MODAL });
