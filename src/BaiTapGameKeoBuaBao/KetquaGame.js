import React, { Component } from "react";
import { connect } from "react-redux";

class KetquaGame extends Component {
  render() {
    return (
      <div className="col-8">
        <div className="row">
          <div className="col-8 text-center">
            <h1 className="display-5 text-warning">
              I'm iron man, i love you 3000!!!
            </h1>
            <div className="display-4 text-success">
              Số bàn thắng :{" "}
              <span className="text-warning">
                {this.props.stateGame.soBanThang}
              </span>
            </div>
            <div className="display-4 text-success">
              Số bàn chơi :{" "}
              <span className="text-warning">
                {this.props.stateGame.tongSoBanChoi}
              </span>
            </div>
            <div className="display-5">
              <button
                onClick={() => {
                  //Tạo ra 1 action
                  this.props.choiGame();
                }}
                className="btn btn-success p-3"
              >
                <span className="bg-success w-25 display-5">Play game</span>
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="speech-bubble">
              <img
                style={{
                  backgroundColor: "#fff",
                  position: "absolute",
                  left: "5px",
                  top: "5px",
                  padding: "10px",
                }}
                src={this.props.stateGame.mangRandom.hinhAnh}
                width="80"
              ></img>
            </div>
            <img src="./img/playerComputer.png" width="150"></img>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => ({
  stateGame: rootReducer.gameKeoBuaBaoReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    choiGame: (playGame, soBanThang, tongSoBanChoi) => {
      dispatch({
        type: "PLAY_GAME",
        playGame,
        soBanThang,
        tongSoBanChoi,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetquaGame);
