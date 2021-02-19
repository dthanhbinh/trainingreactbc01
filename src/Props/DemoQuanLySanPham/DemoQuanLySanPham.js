import React, { Component } from "react";
import SPDemo from "./SPDemo";

export default class DemoQuanLySanPham extends Component {
  state = {
    spChiTiet: {
      maSP: "",
      tenSP: "",
      manHinh: "",
      heDieuHanh: "",
      cameraTruoc: "",
      cameraSau: "",
      ram: "",
      rom: "",
      giaBan: "",
      hinhAnh: "",
    }, //Dùng obj lữu trũ thông tin đt chi tiết
  };

  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  renderSP = () => {
    return this.mangSanPham.map((sp, index) => {
      return (
        <div key={index} classname="col-4">
          <SPDemo sanPham={sp} xemCT={this.xemChiTiet} />
          {/* <div className="card text-left ml-3">
            <img
              className="card-img-top"
              style={{ width: 300 }}
              src={sp.hinhAnh}
              alt
            />
            <div className="card-body">
              <h4 className="card-title">{sp.tenSP}</h4>
              <p className="card-text">{sp.giaBan}</p>
              <button
                onClick={() => {
                  this.xemChiTiet(sp);
                }}
                className="btn btn-success"
              >
                Xem Chi Tiết
              </button>
            </div>
          </div> */}
        </div>
      );
    });
  };

  xemChiTiet = (click) => {
    //setState
    console.log(click);
    this.setState({
      spChiTiet: click,
    });
  };
  render() {
    let {
      hinhAnh,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      ram,
      rom,
      giaBan,
    } = this.state.spChiTiet;
    return (
      <div className="container">
        <h3 className="text-center display-4">Danh Sách Sản Phẩm</h3>
        <div className="row">{this.renderSP()}</div>
        <div className="row mt-5">
          <div className="col-4">
            <h3>{tenSP}</h3>
            <img
              className="card-img-top"
              style={{ width: 300 }}
              src={hinhAnh}
              alt={hinhAnh}
            />
          </div>
          <div className="col-8">
            <h3 className="text-center">Thông Số Kỹ Thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ Điểu Hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera Trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera Sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>RAM</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>ROM</th>
                  <th>{rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
