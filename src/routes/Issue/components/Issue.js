import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm} from 'redux-form'

class Issue extends React.Component{
  constructor(props){  
    super(props);
    this.save = this.save.bind(this);
    this.state = {
      users : [],
      message : ''
    }
  }
  componentWillMount(){
    this.props.getData()
  }
  componentDidMount(){
    this.setState({
      users : this.props.users
    })
  }
  save(values) {
    this.props.submitForm(values);
    this.state.message = "Succcessfully Issued";
  }
  additems(e) {
    this.props.getBook(e.target.value);
    this.props.getStudent(e.target.value);
  }
  render(){
    const book = this.props.book ;
    const student = this.props.student ;
    const bookNames = book.map(item => {
      return (     
        <option>{item}</option>
      )
    })
    const studentNames = student.map(item => {
      return (     
        <option>{item}</option>
      )
    })

  return(
    <div>
      <div>
        <form onSubmit={this.props.handleSubmit(this.save)}>
           <div>
            <label>Field
              <Field name="field" component="select" required= "required" 
               onChange={(e) => this.additems(e)}>
                 <option  />
                 <option>Mechanical Engineering.</option>
                 <option>Electrical Engineering</option>
                 <option>Electronic & Communication Engineering</option>
                 <option>Civil Engineering</option>
                 <option>Computer Science Engineering</option>
                 <option>Chemical Engineering</option>
              </Field>
            </label>
          </div>
          <div>
            <label>Book
              <Field name="book_name" component="select" required= "required">
                <option />
                {bookNames}
              </Field>
            </label>
          </div>
          <div>
            <label>Student Name
              <Field name="s_name" component="select" required= "required">
                <option />
                {studentNames}
              </Field>
            </label>
            </div>
            <button type="submit">Issue Book</button>
        </form>
      </div> 
      {this.state.message}
    </div>
    )
  }
}
export default reduxForm({
  form:'form',
})(Issue)


