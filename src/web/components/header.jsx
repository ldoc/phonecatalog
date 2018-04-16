import React from "react";

class Header extends React.PureComponent {
  render() {
    // temporal styles (TODO: remove when create css)
    const tempStyleHeader = {backgroundColor:'yellow'};
    const tempStyleItems = {display:'inline' , border:'solid 1px black' , margin:'10px'};

    return (
      <div style={tempStyleHeader}>
        <div style={tempStyleItems}>Logo</div>
      </div>
    );
  }
}

export default Header;