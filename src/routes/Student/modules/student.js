export const SUBMIT_FORM =  'SUBMIT_FORM'
  export const ITEM_LOCALSTORAGE ='ITEM_LOCALSTORAGE'
 
export const submitForm = (values) => {
  return dispatch => {
    let StudentData =  JSON.parse(localStorage.getItem('student'));
    let array = [];
    if(StudentData!=null) {
      StudentData.map(function (v) {
        array.push(v);
      });
    }
    array.push(values);
    localStorage.setItem('student',JSON.stringify(array))
  }
}

const ACTION_HANDLERS = {

};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};

export default function storeLocatorReducer(state = initialState, action) {
 const handler = ACTION_HANDLERS[action.type];
 return handler ? handler(state, action) : state;
}
