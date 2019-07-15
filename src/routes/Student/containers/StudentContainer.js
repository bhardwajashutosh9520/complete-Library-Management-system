import { connect } from 'react-redux'
import Student from '../components/Student'
import { submitForm } from '../modules/student';

const mapDispatchToProps = {
  submitForm : (formData) => submitForm(formData)
  // increment : () => increment(1),
  // doubleAsync
}

const mapStateToProps = (state) => ({
  // counter : state.counter
})


export default connect(null, mapDispatchToProps)(Student)
