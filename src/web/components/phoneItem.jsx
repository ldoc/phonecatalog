import React from "react";
import { Link } from 'react-router-dom';

class PhoneItem extends React.PureComponent {
  render() {
    const {id,name,description,color,price} = this.props;
    return (
      <div className='item'>
        <Link to={`phone/${id}`}>
          <div className='phone'>
            <img src={`http://localhost:3000/phones/images/${id}_low.png`}/>
            <div>{name}</div>
          </div>
        </Link>
      </div> 
    );

  }
}

export default PhoneItem;