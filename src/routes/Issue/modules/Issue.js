import { browserHistory } from 'react-router';
export const SUBMIT_FORM =  'SUBMIT_FORM';
export const ITEM_LOCALSTORAGE ='ITEM_LOCALSTORAGE';
export const SET_BOOK ='SET_BOOK';
export const SET_STUDENT ='SET_STUDENT';
export const GET_DATA = 'GET_DATA';
export const SET_USERS_DATA = 'SET_USERS_DATA';

export const submitForm = (values) => { 
  return (dispatch) => {
    let IssueData =  JSON.parse(localStorage.getItem('issue'));
    let array = [];
    if(IssueData!=null) {
      IssueData.map(function (v) {
        array.push(v);
      });
    }
    array.push(values);
    localStorage.setItem('issue',JSON.stringify(array));
    let BookData =  JSON.parse(localStorage.getItem('Book'));
    BookData.map(function (item) {
      if(item.book_name == values.book_name)  {
          item.qnt = parseInt(item.qnt) - 1;
        }
      });
    localStorage.setItem('Book',JSON.stringify(BookData));
  }
}

export const setItems = (values)=> {
  return {
    type: SUBMIT_FORM,
    item: values
  }
}

export const getBook = (value) => {
  return (dispatch) => {
    const Data = JSON.parse(localStorage.getItem('Book'));
    const BookData = [];
    Data.map(item => {
      if(item.field == value) {
        if (item.book_name != null) {
          if(item.qnt != 0) {
             BookData.push(item.book_name) 
          } 
        }
      }
     })
    dispatch(setBook(BookData));
}
}

export const getStudent = (value) => {
  return (dispatch) => {
    const Data = JSON.parse(localStorage.getItem('student')); 
    const StudentData = [];
    Data.map(item => {
      if(item.field == value) {
        if (item.s_name != null) {
          StudentData.push(item.s_name) 
        }
      }
     })
    dispatch(setStudent(StudentData));
}
}
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------
export const setUsersData = (data) => {
  return {
    type : SET_USERS_DATA,
    users : data
  }
}
export const setBook = (data) => {
  return {
    type : SET_BOOK,
    book : data
  }
}

export const setStudent = (data) => {
  return {
    type : SET_STUDENT,
    student : data
  }
}
export const getData = () => {
  return (dispatch) => {
    const usersData = JSON.parse(localStorage.getItem('Data'));
    dispatch(setUsersData(usersData));
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
  },

   [SET_BOOK] : (state, action) => {
    return {
      ...state,
      book : action.book
    }
  },

  [SET_STUDENT] : (state, action) => {
    return {
      ...state,
      student : action.student
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
  users : [],
  book:[],
  student: []

}

export default function listReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}