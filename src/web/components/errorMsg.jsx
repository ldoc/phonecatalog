import React from "react";

class ErrorMsg extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.msgError}
      </div>
    );
  }
}

export default ErrorMsg;