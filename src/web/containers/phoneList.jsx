import React from "react";
import { connect } from 'react-redux';
import { testAction } from '../actions/phones';

class PhoneList extends React.Component {

  componentWillMount (nextProps, nextState) {
    this.props.testAction();
  }
    
  render() {
    return <div>{this.props.test}</div>;
  }
}

const mapStateToProps = state => ({
  test: state.phones.test
})

const mapDispatchToProps = {
  testAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneList);