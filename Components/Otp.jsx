import React, { Component } from "react";
import OtpInput from "react-otp-input";

export default class Otp extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={4}
        separator={<span>-</span>}
      />
    );
  }
}
