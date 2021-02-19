import React, { Component } from "react";

export default class SPDemo extends Component {
  render() {
    let { sanPham, xemCT } = this.props;
    return (
      <div>
        <div className="card text-left ml-3">
          <img
            className="card-img-top"
            style={{ width: 300 }}
            src={sanPham.hinhAnh}
            alt
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button
              onClick={() => {
                xemCT(sanPham);
              }}
              className="btn btn-success"
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
