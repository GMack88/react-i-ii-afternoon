import React, { Component } from "react";
import userData from "../data";
import "./Card.css";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userData
    };
  }
  render() {
    console.log(this.state.users);
    console.log(this.props.index);
    let myCard = this.state.users[this.props.index];
    console.log("My Card", myCard);
    return (
      <div className="card">
        <div className="counter">
          {this.props.index + 1}/{this.state.users.length}
        </div>
        <h1>
          {myCard.name.first} {myCard.name.last}
        </h1>
        <h2>
          <label>From: </label>
          {myCard.city}, {myCard.country}
        </h2>
        <h2>Job Title: {myCard.title}</h2>
        <h2>Employer: {myCard.employer}</h2>
      </div>
    );
  }
}
export default Card;
