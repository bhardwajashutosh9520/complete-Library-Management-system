import { browserHistory } from 'react-router';
export const SET_USERS_DATA = 'SET_USERS_DATA';


// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

export const getData = () => {
  return (dispatch) => {
    const issueData = JSON.parse(localStorage.getItem('issue'));
    const Data = JSON.parse(localStorage.getItem('Book'));
     const array = []
     if(issueData != null) {
     issueData.map(item => {
      array.push(item);
     });
    }
    if(Data != null ) {
     Data.map(item => {
      array.push(item);
     });
    }
    dispatch(setUsersData(array));
  }
} 

export const setUsersData = (data) => {
  return {
    type : SET_USERS_DATA,
    users : data
  }
}



// ------------------------------------
// Actions creator
// ------------------------------------
export const ACTION_HANDLERS = {
  [SET_USERS_DATA]:(state, action) => {
    return {
      ...state,
      users : action.users
    }
  }
}
// ------------------------------------
// Action Handlers
// ------------------------------------


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  counter: 0,
  users : []
}

export default function listReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}


