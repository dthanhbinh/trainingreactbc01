import React, { Component } from "react";
//Thêm import connect ở dòng 4
//Kết nối react component vs redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    console.log(this.props.gioHang, "gioHang");
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Số Lượng</th>
              <th>Giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td>{spGH.soLuong}</td>
                  <td>{spGH.gia}</td>
                  <td>{spGH.gia * spGH.soLuong}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
//Hàm chuyển state trên redux trở thành props của component
//State đại diện cho rootReducer
const mapStateToProps = (state) => {
  //Tạo props từ state redux
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};
//Xoá export default ở dòng 5
//Kết nối giữa component và redux
export default connect(mapStateToProps)(GioHangRedux);
