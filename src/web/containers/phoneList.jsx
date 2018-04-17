import React from "react";
import { connect } from 'react-redux';
import { getPhones } from '../actions/phones';
import PhoneItem from '../components/phoneItem';
import PhoneDetail from '../components/phoneDetail';
import ErrorMsg from '../components/errorMsg';

class PhoneList extends React.Component {

  componentWillMount (nextProps, nextState) { 
    this.props.getPhones();
  }

  renderErrorMsg = (e) => <ErrorMsg {...e}/>;

  renderPhoneList = (pL) => pL.map((p) => <PhoneItem {...p}/>);
  
  renderPhoneDetail = (p) => <PhoneDetail {...p}/>;
    
  render() {
    const selected = this.props.match.params.id;
    const {phoneList , error} = this.props;

    if (error) return this.renderErrorMsg({msgError:error});
    else if(!selected) return this.renderPhoneList(phoneList);
    else return this.renderPhoneDetail(phoneList.find( (p) => p.id === parseInt(selected) ));
  }
  
}

const mapStateToProps = state => ({
  phoneList: state.phones.list,
  error: state.phones.error
})

const mapDispatchToProps = {
  getPhones
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneList);