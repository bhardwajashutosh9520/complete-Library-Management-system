
import { connect } from 'react-redux'
import BookList from '../components/BookList'
import { submitForm } from '../modules/book';


const mapDispatchToProps = {
   submitForm : (formData) => submitForm(formData)
}

const mapStateToProps = (state) => ({
  // counter : state.counter
})

export default connect(null,mapDispatchToProps)(BookList)
