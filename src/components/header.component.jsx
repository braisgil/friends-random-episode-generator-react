import React, { Component } from 'react'
import appLogo from '../images/friends-logo.png';

export default class HeaderComponent extends Component {
  render() {
    return (
      <>
        <div className="info-wrapper__logo">
          <img src={appLogo} alt=""/>
        </div>
        <h1 className="info-wrapper__heading">
          {this.props.name}
        </h1>
      </>
    )
  }
}
