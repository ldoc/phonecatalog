import React from "react";
import { connect } from 'react-redux';
import { getPhones } from '../actions/phones';
import PhoneItem from '../components/phoneItem';
import PhoneDetail from '../components/phoneDetail';

class PhoneList extends React.Component {

  componentWillMount (nextProps, nextState) {
    this.props.getPhones();
  }

  renderPhoneList = (pL) => pL.map((p) => <PhoneItem {...p}/>);
  
  renderPhoneDetail = (p) => <PhoneDetail {...p}/>;
    
  render() {
    const selected = this.props.match.params.id;
    const phoneList = this.props.phoneList;

    if(!selected) return this.renderPhoneList(phoneList);
    else return this.renderPhoneDetail(phoneList.find( (p) => p.id === parseInt(selected) ));
  }
  
}

const mapStateToProps = state => ({
  phoneList: state.phones.list
})

const mapDispatchToProps = {
  getPhones
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneList);