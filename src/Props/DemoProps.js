import React, { Component } from "react";
import ThongTinSinhVien from "./ThongTinSinhVien";

export default class DemoProps extends Component {
  mangSinhVien = [
    { ma: "sv01", ten: "Khải", tuoi: 18 },
    { ma: "sv02", ten: "Sĩ", tuoi: 20 },
    { ma: "sv03", ten: "Phú", tuoi: 21 },
  ];
  renderSinhVien = () => {
    const result = this.mangSinhVien.map((sv, index) => {
      return (
        <div className="col-4" key={index}>
          <ThongTinSinhVien sinhvien={sv} />
        </div>
      );
    });
    return result;
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center display-4">Thông Tin Sinh Viên</h3>
        <div className="row">{this.renderSinhVien()}</div>
      </div>
    );
  }
}
