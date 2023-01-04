import {ADD_NOTIFICATION} from "../actions/actionTypes.js";

const initState = {
  notifications: []
};

export default function notificationsReducer(state = initState, action){
  switch (action.type){
    case ADD_NOTIFICATION: {
      return { notifications: [...state.notifications, action.notification] };
    }
    default: return state;
  }
}

