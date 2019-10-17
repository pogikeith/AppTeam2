import React, { Component } from "react";

export default class PortfolioItem extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://reporter-fake-dating-site-db.herokuapp.com/users")
      .then(response => response.json())
      .then(results => this.setState({ data: results }))

      .catch(error => {
        console.log("error", error);
      });
  }

  renderItems = () => {
    return this.state.data.map(item => {
      return (
        <div className="portfolio-item-wrapper">
          <div className="photo">
            <img
              className="profile-pics"
              src={item.profile_picture}
              alt="Benprofile"
            />
          </div>
          <div className="custName">
            <h2>
              {item.first_name} {item.last_name}
            </h2>
          </div>
          <br />
          <div className="about-user">
            <h3>{item.username}</h3>
          </div>
          <button className="see-more">View Profile</button>
        </div>
      );
    });
  };

  render() {
    return <div className="Portfolio-Wrapper">{this.renderItems()}</div>;
  }
}
