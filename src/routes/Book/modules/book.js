export const SUBMIT_FORM =  'SUBMIT_FORM'
export const ITEM_LOCALSTORAGE ='ITEM_LOCALSTORAGE'
 
export const submitForm = (values) => {
  return dispatch => {
  	let BookData =  JSON.parse(localStorage.getItem('Book'));
    let array = [];
    let num = 0;
    if(BookData!=null) {
      BookData.map(function (v) {
        array.push(v);
      });
      BookData.map(function (item) {
       if(item.book_name == values.book_name & item.author_name == values.author_name) {
         num = item.qnt;
       }
      });
    }

    if(Number(num) == 0) {
      array.push(values)
    } 
    else {
      BookData.map(function (item) {
        if(item.book_name == values.book_name & item.author_name == values.author_name) {
          item.qnt = parseInt(item.qnt) + Number(values.qnt);
        }
      })
    }
    localStorage.setItem('Book',JSON.stringify(array));
  }
}

export const setItems = (values)=>{
  return {
    type: SUBMIT_FORM,
    item: values
  }
}



// ------------------------------------
// Constants
// ------------------------------------


// ------------------------------------
// Actions
// ------------------------------------



// ------------------------------------
// Action Handlers
// ------------------------------------
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
