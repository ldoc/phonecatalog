import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      back:false
    }
  }

  changeLocation = () =>{
    const hash = window.location.hash;
    this.setState({back: (hash != '#/')})
  }

  componentDidMount(){
    window.addEventListener('popstate', this.changeLocation);
  }

  goBack = () => {
    window.location.hash = '#';
  }

  render() {
    return (
      <div className="header">
        <div className="title">Phones Catalog</div>
        {
          this.state.back?
          <div className="goback" onClick={this.goBack}><span>&lt;-</span> <span id="literal">Go back</span> </div>
          :
          null
        }
        
      </div>
    );
  }
}

export default Header;