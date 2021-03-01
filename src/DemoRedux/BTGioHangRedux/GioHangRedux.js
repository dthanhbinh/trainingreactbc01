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
                  <td>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGH.maSP, 1);
                      }}
                    >
                      +
                    </button>
                    {spGH.soLuong}
                    <button
                      className="btn btn-primary ml-2"
                      onClick={() => {
                        this.props.thayDoiSoLuong(spGH.maSP, -1);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{spGH.giaBan}</td>
                  <td>{spGH.giaBan * spGH.soLuong}</td>
                  <td>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => {
                        this.props.xoaSanPham(spGH.maSP);
                      }}
                    >
                      Xoá
                    </button>
                  </td>
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
const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiSoLuong: (maSP, soLuong) => {
      //Tạo action
      const action = {
        type: "THAY_DOI_SO_LUONG",
        maSP: maSP,
        soLuong: soLuong,
      };
      dispatch(action);
    },
    xoaSanPham: (maSP) => {
      //tạo action
      const action = {
        type: "XOA_SAN_PHAM",
        maSP: maSP,
      };
      //Dưa dữ lệu về reducer
      dispatch(action);
    },
  };
};
//Xoá export default ở dòng 5
//Kết nối giữa component và redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
