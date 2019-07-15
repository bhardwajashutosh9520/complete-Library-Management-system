import React from 'react'
import { Field, reduxForm} from 'redux-form'
import RenderField from './renderfield';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength25 = maxLength(25)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
  const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minLength5 = minLength(5)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

class StudentForm extends React.Component {
  constructor(props){
    super(props);
    this.save = this.save.bind(this);
    this.state = {
      message: ""
    };
  }
  save(values) {
    this.state.message = "You have Successfully submitted."
    this.props.submitForm(values);
  }
  render() {
    return (
      <div className="w-25 p-3 container">
        <form onSubmit={this.props.handleSubmit(this.save)}>
          <div>
            <label htmlFor="s_name">Student Name</label>
            <Field
              name="s_name"
              component={RenderField}
              type="text"
              validate = {[required, maxLength25, minLength5]}
             
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <Field
              name="email"
              component={RenderField}
              type="email"
              validate = {[required, maxLength25, minLength5]}
              placeholder= "eg: xyz123@gmail.com"
            />
          </div>
          <div>
            <label>Field
             <Field name="field" component="select" required= "required">
               <option />
               <option>Mechanical Engineering.</option>
               <option>Electrical Engineering</option>
               <option>Electronic & Communication Engineering</option>
               <option>Civil Engineering</option>
               <option>Computer Science Engineering</option>
               <option>Chemical Engineering</option>
             </Field></label>
          </div>
          <div>
            <label htmlFor="m_num">Mobile Number</label>
            <Field
              name="m_num"
              component="input"
              type="number"
              placeholder="enter the mobile number"
              required= "required"
            />
          </div>
          <button type="submit">Add Student</button>
        </form>
        <h2> {this.state.message} </h2>
      </div>
    );
  }
}

export default reduxForm({
  form:'form',
})(StudentForm)

