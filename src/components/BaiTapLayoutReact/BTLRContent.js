import React, { Component } from "react";
import BTLRCarousel from "./BTLRCarousel";
import BTLRProductlist from "./BTLRProductlist";

export default class BTLRContent extends Component {
  render() {
    return (
      <div className="container">
        <BTLRCarousel />
        <BTLRProductlist />
      </div>
    );
  }
}
