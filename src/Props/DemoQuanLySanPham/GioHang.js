import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang, xoaGioHang } = this.props;
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Giá SP</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <th>{spGH.maSP}</th>
                  <th>{spGH.tenSP}</th>
                  <th>
                    <img src={spGH.hinhAnh} width="50" height="50" />
                  </th>
                  <th>{spGH.soLuong}</th>
                  <th>{spGH.gia}</th>
                  <th>{spGH.gia * spGH.soLuong}</th>
                  <th>
                    <button
                      onClick={() => {
                        xoaGioHang(spGH);
                      }}
                      className="btn btn-danger"
                    >
                      Xoá
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
