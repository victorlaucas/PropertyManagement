import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <h1>Welcome to The HOA Manager!</h1>
        <p>Please login to continue</p>
        {this.props.children}
      </div>
    );
  }
}

export default Header;