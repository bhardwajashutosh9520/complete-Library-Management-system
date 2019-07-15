import React from 'react';
import PropTypes from 'prop-types';
class Management extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
   this.props.getData()
    }

  componentDidMount(){
    this.setState({
      users : this.props.users
    })
  }
  
  render(){
    const issueData = this.props.users;
    const bookIssue = issueData.map(item => {
      if(item.s_name != null) {
        return (     
          <tr>
            <td>{item.s_name}</td>
            <td>{item.field}</td>
            <td>{item.book_name}</td>                
          </tr>
        )
      }
    });

    const bookStore = issueData.map(item => {
      if(item.author_name != null) {
        return (     
          <tr>
            <td>{item.book_name}</td>
            <td>{item.field}</td>
            <td>{item.qnt}</td>
          </tr>
       )
      }
    });

    return (
      <div>
        <table className = "table table-striped" key ="item.id">
          <tbody>
            <tr>
              <th colSpan="3" align="center"><h3>Book Issue Management</h3></th>
            </tr>
            <tr>
              <td><h5>Student</h5></td>
              <td><h5>Branch</h5></td>
              <td><h5>Book</h5></td>    
            </tr>
            {bookIssue}
          </tbody>
        </table>
        
        <table className = "table table-striped">
          <tbody>
            <tr>
              <th colSpan="3" align="center"><h3>Book Store Management</h3></th>
            </tr>
            <tr>
              <td><h5>Book</h5></td>
              <td><h5>Branch</h5></td>
              <td><h5>Available</h5></td>
            </tr>
            {bookStore}
          </tbody>
        </table>
    </div>
     )
  }
}

export default Management;
