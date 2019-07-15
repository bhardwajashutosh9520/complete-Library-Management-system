//import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../modules/Management'
import Management from '../components/Management'

const mapStateToProps = (state) => {
  return  {
    users : state.mgmt.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    getData : () => dispatch(getData()),  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Management)