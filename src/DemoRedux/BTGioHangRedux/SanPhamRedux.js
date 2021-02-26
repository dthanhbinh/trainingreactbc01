import React, { Component } from "react";

export default class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div>
        <div className="card text-left ml-3">
          <img
            className="card-img-top"
            style={{ width: "300" }}
            src={sanPham.hinhAnh}
            alt
          />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>

            <button className="btn btn-danger" onClick={() => {}}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
