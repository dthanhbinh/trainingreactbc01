import React, { Component } from "react";
//B1:import connect
import { connect } from "react-redux";
class XucXac extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-4">
            <button
              onClick={() => {
                this.props.chonTaiXiu("Tài");
              }}
              style={{ border: "none" }}
              className="bg-danger"
            >
              <div
                className="p-5 bg-danger text-white w-100 h-100"
                style={{ fontSize: 50 }}
              >
                TÀI
              </div>
            </button>
          </div>
          <div className="col-4">
            {this.props.xucXac.map((xucXac, index) => {
              return <img key={index} src={xucXac.hinhAnh} width="100"></img>;
            })}
            {/* <img
              className="mx-2"
              src={stateGame.mangXucXac[0].hinhAnh}
              width="100"
            />
            <img
              className="mx-2"
              src={stateGame.mangXucXac[1].hinhAnh}
              width="100"
            />
            <img
              className="mx-2"
              src={stateGame.mangXucXac[2].hinhAnh}
              width="100"
            /> */}
          </div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.chonTaiXiu("Xỉu");
              }}
              style={{ border: "none" }}
              className="bg-dark"
            >
              <div
                className="p-5 bg-dark text-white w-100 h-100"
                style={{ fontSize: 50 }}
              >
                XỈU
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  //return {}=({})
  xucXac: state.baiTapGameReducer.mangXucXac,
});
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    chonTaiXiu: (giaTri) => {
      // console.log(giaTri);
      const action = {
        //Gửi giá trị được chọn lên redux
        type: "CHON_TAI_XIU",
        giaTri,
      };
      //gửi lên redux
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
