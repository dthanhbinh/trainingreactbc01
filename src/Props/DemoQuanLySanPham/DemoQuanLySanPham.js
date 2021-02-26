import React, { Component } from "react";
import GioHang from "./GioHang";
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
    gioHang: [
      {
        maSP: 1,
        hinhAnh: "./img/applephone.jpg",
        tenSP: "Iphone",
        gia: 1000,
        soLuong: 1,
      },
    ],
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
          <SPDemo
            sanPham={sp}
            xemCT={this.xemChiTiet}
            themGioHang={this.themGioHang}
          />
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
  //hàm xử lý làm thay đổi state sẽ đặt tại component chứa state
  themGioHang = (spClick) => {
    //Sau khi click thì tạo ra 1 sp giống object trong giỏ hàng
    let spGH = {
      maSP: spClick.maSP,
      hinhAnh: spClick.hinhAnh,
      tenSP: spClick.tenSP,
      gia: spClick.giaBan,
      soLuong: 1,
    };
    let gioHangUpdate = [...this.state.gioHang];
    //Xử lý kiểm tra state giỏ hàng có chứa dữ liệu sp đó khi click chưa => nếu có thì tăng số lương, không có thì thêm vào
    let indexSPGH = gioHangUpdate.findIndex((sp) => sp.maSP === spClick.maSP);
    if (indexSPGH !== -1) {
      //Tìm thấy vị trí index
      gioHangUpdate[indexSPGH].soLuong += 1;
    } else {
      gioHangUpdate.push(spGH);
    }
    // let gioHangUpdate = [...this.state.gioHang,spGH];
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  xemChiTiet = (click) => {
    //setState
    console.log(click);
    this.setState({
      spChiTiet: click,
    });
  };
  xoaGioHang = (spXoa) => {
    let gioHangUpdate = [...this.state.gioHang];
    console.log(gioHangUpdate);
    //Xử lý kiểm tra state giỏ hàng có chứa dữ liệu sp đó khi click chưa => nếu có thì xoá;
    // let indexSPGH = gioHangUpdate.findIndex((sp) => sp.maSP === spXoa.maSP);
    // gioHangUpdate.splice(indexSPGH, 1);
    // console.log(gioHangUpdate);
    gioHangUpdate = gioHangUpdate.filter((spGH) => spGH.maSP !== spXoa);
    //setState xoá
    this.setState({
      gioHang: gioHangUpdate,
    });
  };
  tanggiamSL = (maSP, soLuong) => {
    let gioHangUpdate = [...this.state.gioHang];
    //Tìm ra sp trong giỏ hàng dựa vào mã sp
    let index = gioHangUpdate.findIndex((spGH) => spGH.maSP === maSP);
    //Tăng giảm số lượng
    if (index !== -1) {
      gioHangUpdate[index].soLuong += soLuong;
      if (gioHangUpdate[index].soLuong <= 0) {
        alert("Số lượng không hợp lệ!");
        gioHangUpdate[index].soLuong -= soLuong;
        return;
      }
    }
    //setState tăng sl
    this.setState({
      gioHang: gioHangUpdate,
    });
  };
  // giamSL = (spGiam) => {
  //   let gioHangUpdate = [...this.state.gioHang];
  //   //Xử lý kiểm tra state giỏ hàng có chứa dữ liệu sp đó khi click chưa => nếu có thì tăng số lương, không có thì thêm vào
  //   let indexSPGH = gioHangUpdate.findIndex((sp) => sp.maSP === spGiam.maSP);
  //   if (indexSPGH !== -1) {
  //     //Tìm thấy vị trí index
  //     gioHangUpdate[indexSPGH].soLuong += 1;
  //   } else {
  //     gioHangUpdate.splice(indexSPGH);
  //   }
  //   //setState xoá
  //   this.setState({
  //     gioHang: gioHangUpdate,
  //   });
  // };
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
        <h1 className="mt-2">Giỏ hàng</h1>
        <GioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tanggiamSL={this.tanggiamSL}
        />
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
