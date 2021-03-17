import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapGameKeoBuaBao.css";
import KeoBuaBao from "./KeoBuaBao";
import KetquaGame from "./KetquaGame";

class BaiTapGameKeoBuaBao extends Component {
  render() {
    return (
      <div className="bgGameKBB">
        <div className="container mt-5">
          <div className="row">
            <KeoBuaBao />
            <KetquaGame />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaiTapGameKeoBuaBao);
