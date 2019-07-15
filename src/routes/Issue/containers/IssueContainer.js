import { connect } from 'react-redux'
import Issue from '../components/Issue'
import {getData , getBook , getStudent} from '../modules/Issue'
import { submitForm } from '../modules/Issue';
//import { getSlot, getUser } from '../modules/booking';


const mapStateToProps = (state) => {
  return  {
    users : state.issue.users,
    book: state.issue.book,
    student : state.issue.student

  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    getData : () => dispatch(getData()),
    getBook: (book)  => dispatch(getBook(book)),
    getStudent : (student) => dispatch(getStudent(student)),
    submitForm : (formData) => dispatch(submitForm(formData))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Issue)
