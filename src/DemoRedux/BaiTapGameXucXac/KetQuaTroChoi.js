import React, { Component } from "react";
//Thư viện kết nối với store của redux
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    let { stateGame } = this.props;
    //Cách hai của mapdispatchtoprop
    // this.props.dispatch
    return (
      <div className="container text-center">
        <div className="display-4">
          Bạn chọn : <span className="text-success">{stateGame.banChon}</span>
        </div>
        <div className="display-4">
          Số bàn thắng :
          <span className="text-warning">{stateGame.soBanThang}</span>
        </div>
        <div className="display-4">
          Số bàn chơi :
          <span className="text-primary">{stateGame.tongSoBanChoi}</span>
        </div>
        <div className="display-4">
          <button
            onClick={() => {
              //Tạo ra 1 action
              const action = {
                type: "PLAY_GAME",
              };
              //Đưa action lên reducer
              //Không xài stateGame.dispatch do stateGame là prop của mình truyền vào con this.prop trong đây là của redux
              this.props.dispatch(action);
            }}
            className="btn btn-success p-3"
          >
            <span className="bg-success w-25 display-4">Play game</span>
          </button>
        </div>
      </div>
    );
  }
}
//Viết hàm lấy giá trị từ store redux về biến thành props của component
const mapStateToProps = (rootReducer) => {
  return {
    stateGame: rootReducer.baiTapGameReducer,
    // banChon: rootReducer.baiTapGameReducer.banChon,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);
// rfcredux
