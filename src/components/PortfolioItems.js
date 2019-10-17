import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link to={`/profile/${item.username}`} className="see-more">
            View Profile
          </Link>
        </div>
      );
    });
  };

  render() {
    return <div className="Portfolio-Wrapper">{this.renderItems()}</div>;
  }
}
