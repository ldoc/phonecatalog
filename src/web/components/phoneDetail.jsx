import React from "react";
import { Link } from 'react-router-dom';

class PhoneDetail extends React.Component {
  render() {
    // temporal styles (TODO: remove when create css)
    const tempStyleField = {display:'inline' , border:'solid 1px black' , margin:'10px'};
    const {id,name,description,color,price} = this.props;

    return (
      <div> 
        <img src={`http://localhost:3000/phones/images/${id}_high.png`}/>
        <div>{name}</div>
        <div>{description}</div>
        <div>{color}</div>
        <div>{price}</div>
        <Link to={'/'}>
          <div style={tempStyleField}>Go Back Button</div>
        </Link>
      </div>
    );
  }
}

export default PhoneDetail;