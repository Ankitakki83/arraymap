import React from "react";
import "./bodyComponent.css";

export default class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="BodyComponent">
        <div className="BodyComponent_btn">
          <button onClick={this.IncrementItem}>Click to increment by 1</button>
          <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
          <button onClick={this.ToggleClick}>
            {this.state.show ? "Hide number" : "Show number"}
          </button>
          {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
        </div>
      </div>
    );
  }
}
