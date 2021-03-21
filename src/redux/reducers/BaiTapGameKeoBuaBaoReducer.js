const stateDefault = {
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangKBB: [
    { ma: "keo", hinhAnh: "./img/keo.png", chon: true },
    { ma: "bua", hinhAnh: "./img/bua.png", chon: false },
    { ma: "bao", hinhAnh: "./img/bao.png", chon: false },
  ],
  mangRandom: {
    ma: "keo",
    hinhAnh: "./img/keo.png",
    chon: true,
  },
};

export const gameKeoBuaBaoReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "chon": {
      let mangChon = [...state.mangKBB];
      mangChon = mangChon.map((item, index) => {
        return { ...item, chon: false };
      });
      //  console.log("mangDatCuocUpdate",mangCuocUpdate);
      //Tìm mã cược ứng với hành động của mình
      let index = mangChon.findIndex((item) => item.ma === action.machon);
      if (index !== -1) {
        mangChon[index].chon = true;
      }

      state.mangKBB = mangChon;
      return { ...state };
    }

    case "PLAY_GAME": {
      let kqNgauNhien = Math.floor(Math.random() * 3);
      let mangNgauNhien = state.mangKBB[kqNgauNhien];
      state.mangRandom = mangNgauNhien;
      let player = state.mangKBB.find((item) => item.chon === true);
      let computer = state.mangRandom;
      console.log(player, computer);
      if (
        (player.ma === "keo" && computer.ma === "bao") ||
        (player.ma === "bua" && computer.ma === "keo") ||
        (player.ma === "bao" && computer.ma === "bua")
      ) {
        state.soBanThang += 1;
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
