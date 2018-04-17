import React from "react";
import { Link } from 'react-router-dom';

class PhoneDetail extends React.Component {
  render() {
    const {id,name,description,color,price} = this.props;

    return (
      <div className='phoneDetail'> 
        <image>
          <img src={`http://localhost:3000/phones/images/${id}_high.png`}/>
        </image>
        <desc><div><b>Description: </b>{` ${description}`}</div></desc>
        <color><div><b>Color: </b>{` ${color}`}</div></color>
        <price><div><b>Price:</b>{` ${price} €`}</div></price>
      </div>
    );
  }
}

export default PhoneDetail;