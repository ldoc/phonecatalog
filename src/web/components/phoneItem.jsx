import React from "react";
import { Link } from 'react-router-dom';

class PhoneItem extends React.PureComponent {
  render() {

    // temporal styles (TODO: remove when create css)
    const tempStyleItem = {borderBottom:'dashed 1px gray'};
    const tempStyleField = {display:'inline' , border:'solid 1px black' , margin:'10px'};
    const {id,name,description,color,price} = this.props;

    return (
      <Link to={`phone/${id}`}>
        <div style={tempStyleItem}>
          <img src={`http://localhost:3000/phones/images/${id}_low.png`}/>
          <div style={tempStyleField}>{name}</div>
        </div>
      </Link>
    );
  }
}

export default PhoneItem;