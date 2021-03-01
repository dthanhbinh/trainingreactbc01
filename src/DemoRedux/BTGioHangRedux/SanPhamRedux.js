import React, { Component } from "react";
//kết nối redux
import { connect } from "react-redux";
class SanPhamRedux extends Component {
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

            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.themGioHang(sanPham);
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
//Hàm dùng để lấy state từ redux vè để tạo thành props của component
const mapStateToProps = (state) => {
  return {};
};
//Hàm để tạo ra props là hàm sử lý xự kiện đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      console.log("sp dc click", sanPhamClick);
      //Tạo ra spGioHang từ spClick
      const spGioHang = {
        ...sanPhamClick,
        soLuong: 1,
      };
      //Đưa dữ liệu lên redux store
      const action = {
        type: "THEM_GIO_HANG", //Thuộc tính bắt buộc ghi khi gửi dữ liệu lên Redux
        spGioHang: spGioHang,
      };
      //Dùng hàm dispatch đưa dữ liệu lên reducer(redux store)
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);
