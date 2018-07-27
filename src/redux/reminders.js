// Acions
const LOAD_REMINDERS_START = 'remindme/reminders/LOAD_REMINDERS_START';

const TOGGLE_MODAL = 'remindme/reminders/TOGGLE_MODAL';
// Reducer
const INITIAL_STATE = {
  reminders: {},
  isLoading: false
  showModal: false,
};

export const remindersReducer = (state: any = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_REMINDERS_START:
      return {
        ...state,
        isLoading: true,
      };
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
export const toggleModal = () => ({ type: TOGGLE_MODAL });
