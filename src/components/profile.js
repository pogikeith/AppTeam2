import React, { Component } from "react";
import SideLinks from "./side-links-wrapper";

export default class Profile extends Component {
  render() {
    return (
      <div className="Heading">
        <SideLinks username={this.props.match.params.username} />
      </div>
    );
  }
}
