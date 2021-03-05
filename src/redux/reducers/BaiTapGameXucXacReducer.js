const stateDefault = {
  banChon: "Tài",
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { diem: 1, hinhAnh: "./img/1.png" },
    { diem: 6, hinhAnh: "./img/6.png" },
    { diem: 1, hinhAnh: "./img/1.png" },
  ],
};

export const baiTapGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_TAI_XIU": {
      state.banChon = action.giaTri;
      return { ...state };
    }
    case "PLAY_GAME": {
      //Xử lý random
      console.log("playgame");
      //B1: Tạo ra mảng xx Ngẫu nhiên
      let mangXXNN = [];
      for (let i = 0; i < 3; i++) {
        //Tạo ra số ngẫu nhiên
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //Tạo ra 3 object ngẫu nhiên
        let xxNN = { diem: soNgauNhien, hinhAnh: `./img/${soNgauNhien}.png` };
        mangXXNN.push(xxNN);
      }
      //Gán mảng xúc xắc ngẫu nhiên bằng mảng xúc xắc
      state.mangXucXac = mangXXNN;
      //Xử lý kết quả
      let tongDiem = mangXXNN.reduce((td, xucXac, index) => {
        return (td += xucXac.diem);
      }, 0);
      if (
        (tongDiem >= 11 && state.banChon === "Tài") ||
        (tongDiem < 11 && state.banChon === "Xỉu")
      ) {
        state.soBanThang += 1;
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }

    //Nếu không có xảy ra action nào thì trả về state mặc định
    default:
      return { ...state };
      break;
  }
};
