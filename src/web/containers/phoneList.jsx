import React from "react";
import { connect } from 'react-redux';

class PhoneList extends React.Component {
  render() {
    return <div>{this.props.test}</div>;
  }
}

const mapStateToProps = state => ({
  test: state.test
})

export default connect(
  mapStateToProps
)(PhoneList);