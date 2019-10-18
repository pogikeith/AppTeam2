import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const username = this.props.username;
    const idFinder = () => {
      if (username === "DaddyNo") {
        return 1;
      } else if (username === "DarthVader4Life") {
        return 2;
      } else if (username === "Jonesy") {
        return 3;
      } else if (username === "MyersNeil") {
        return 4;
      } else if (username === "@TheRealAlexJones") {
        return 5;
      } else if (username === "BoneMaster69") {
        return 6;
      } else if (username === "LifeIsAJoke") {
        return 7;
      } else if (username === "Slayyer") {
        return 8;
      } else if (username === "NoobKiller420") {
        return 9;
      }
    };
    fetch(
      `https://reporters-only-dot-com-db.herokuapp.com/headline/${idFinder()}`
    )
      .then(response => response.json())
      .then(results => this.setState({ data: results }));
  }

  render() {
    return (
      <div className="side-links-wrapper">
        <div className="side-bar">
          <img
            className="keith-image-wrapper"
            src={require("../logo_only.png")}
          />
          <div className="column">
            <div className="kinks-wrapper">
              <div className="klink">
                <Link to="/">Home</Link>
              </div>

              <div className="klink">
                <a href>Join</a>
              </div>

              <div className="klink">
                <a href>About</a>
              </div>
            </div>
          </div>
        </div>
        <div className="top-name-image">
          <div className="name-profPic-wrapper">
            <div className="articles-headline">
              <img className="profPic-prof" src={this.state.data.image_url} />
              <h1 className="a-h">{this.state.data.headline}</h1>
              <p className="subheading">{this.state.data.subheading}</p>
              <h4 className="names">Author: {this.state.data.author}</h4>

              <p className="dater-profile">{this.state.data.article}</p>
              <button className="contact-btn">Contact</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
