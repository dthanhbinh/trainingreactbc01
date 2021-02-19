import React, { Component } from "react";
import BTProductItems from "./BTProductItems";
import BTProductPhone from "./BTProductPhone";

export default class BTProductList extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "Black Berry",
      hinhAnh: "./img/sp_blackberry.png",
      gia: 1000,
    },
    { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 2000 },
    { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
    { maSP: 3, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 3000 },
  ];
  renderSanPham = () => {
    //Hiển Thị Giao Diện Div các sản phẩm dựa vào this.mangSanPham
    const sanPham = this.mangSanPham.map((sp, index) => {
      return (
        <div
          key={index}
          className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"
        >
          <BTProductPhone sanPham={sp} />
        </div>
      );
    });
    return sanPham;
  };
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">BEST SMART PHONE</h1>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
