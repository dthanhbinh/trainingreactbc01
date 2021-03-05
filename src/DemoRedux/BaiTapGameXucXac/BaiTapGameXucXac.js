import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import "./BaiTapGameXucXac.css";
import { connect } from "react-redux";
class BaiTapGameXucXac extends Component {
  renderKetQua = () => {
    return (
      <div className="text-center text-danger display-4">
        {this.props.tongDiem}:{this.props.ketQua}
      </div>
    );
  };

  render() {
    return (
      <div className="bgGameXucXac">
        <h1 className="text-center">Bài Tập Game Xúc Xắc</h1>
        <XucXac />
        {this.renderKetQua()}
        <KetQuaTroChoi />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //lấy mảng xúc xắc từ reducer về
  let mangXucXac = state.baiTapGameReducer.mangXucXac;
  //Tính tổng điểm từ mảng xúc xắc
  let tongDiem = mangXucXac.reduce((td, xucxac, index) => {
    return (td += xucxac.diem);
  }, 0);
  //Lấy tổng điểm tạo ra kết quả toán tử 3 ngôi
  let ketQua = tongDiem > 11 ? "Tài" : "Xỉu";
  //prop tạo ra từ hàm map state to props
  return {
    tongDiem: tongDiem,
    ketQua: ketQua,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     xuatKetQua: () => {
//       const action = {
//         type: "XUAT_KET_QUA",
//       };
//       dispatch(action);
//     },
//   };
// };
export default connect(mapStateToProps)(BaiTapGameXucXac);
