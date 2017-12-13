import React from "react";
import "./bodyComponent.css";

export default class BodyComponent_Bottom extends React.Component {
  constructor() {
    super();
    {
      this.state = {
        street: null,
        country: null,
        showStatus: false
      };
      this.publish = this.publish.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
    this.setState({ showStatus: true });
    // console.log(this.state.street, this.state.county);
  }
  render() {
    return (
      <div className="BodyComponent_Bottom">
        <div className="BodyComponent_btn">
          <input
            name="street"
            placeholder="enter the street name"
            value={this.state.street}
            onChange={this.handleChange}
          />
          <input
            name="country"
            placeholder="enter the name of country"
            value={this.state.cuntry}
            onChange={this.handleChange}
          />

          <button value="send" onClick={this.publish}>
            publish
          </button>
        </div>
        <div className="ShowComponent">
          <h4>
            {" "}
            State Name is --{" "}
            {this.state.showStatus && <div>{this.state.street}</div>}{" "}
          </h4>
          <h4>
            {" "}
            Country Name is -- {" "}
            {this.state.showStatus && <div>{this.state.country}</div>}
          </h4>
        </div>
      </div>
    );
  }
}
