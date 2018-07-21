// Acions
const LOAD_REMINDERS_START = 'remindme/reminders/LOAD_REMINDERS_START';

// Reducer
const INITIAL_STATE = {
  reminders: {},
  isLoading: false
};

export const remindersReducer = (state: any = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_REMINDERS_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};


// Action creators
export const loadReminders = () => ({ type: LOAD_REMINDERS_START, payload });
