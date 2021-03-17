import React, { Component } from "react";
import { connect } from "react-redux";
class KeoBuaBao extends Component {
  render() {
    return (
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
            src={this.props.game.find((item) => item.chon === true).hinhAnh}
            width="80"
          ></img>
        </div>
        <img src="./img/player.png" width="150"></img>
        <div>
          {this.props.game.map((chon, index) => {
            let border = {};
            if (chon.chon) {
              border = { border: "2px solid red" };
            }
            return (
              <button
                onClick={() => {
                  this.props.chon(chon.ma);
                }}
                className="mx-2"
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <img key={index} src={chon.hinhAnh} width="30" height="30" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  game: state.gameKeoBuaBaoReducer.mangKBB,
});

const mapDispatchToProps = (dispatch) => {
  return {
    chon: (machon) => {
      const action = {
        type: "chon",
        machon,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeoBuaBao);
