import React from "react";
import { connect } from 'react-redux';
import { getPhones } from '../actions/phones';
import PhoneItem from '../components/phoneItem';
import PhoneDetail from '../components/phoneDetail';
import ErrorMsg from '../components/errorMsg';

class PhoneList extends React.Component {

  componentWillMount () { 
    this.props.getPhones();
  }

  renderErrorMsg = (e) => <ErrorMsg {...e}/>;

  renderPhoneList = (pL) => {
    return(
      [
        <div className='section' key='section'>Phone´s List</div>,
        <div className='phoneList' key='list'>
          {pL.map((p) => <PhoneItem {...p} key={p.id}/>)}
        </div>
      ]
    );
  }
  
  renderPhoneDetail = (p) => {
    return(
      [
        <div className='section' key='title'>{p.name}</div>,
        <PhoneDetail {...p} key='detail'/>
      ]
    );
  }
    
  render() {
    const selected = this.props.match.params.id;
    const {phoneList , error} = this.props;

    if (error) return this.renderErrorMsg({msgError:error});
    else if(!selected) return this.renderPhoneList(phoneList);
    else if(selected && phoneList && phoneList.length > 0) return this.renderPhoneDetail(phoneList.find( (p) => p.id === parseInt(selected) ));
    else return null;
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