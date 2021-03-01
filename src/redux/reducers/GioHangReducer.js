const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      giaBan: 10000,
      hinhAnh: "./img/applePhone.jpg",
      soLuong: 1,
    },
  ],
};

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG":
      {
        //Xử lý thay đổi state.gioHang trên redux
        // console.log("object", action);
        //B1: sao chép giỏ hàng ra array mới
        const gioHangUpdate = [...state.gioHang];
        //B2: Kiểm tra action.spGioHang gửi len từ component có trong state.gioHang chưa?
        let index = gioHangUpdate.findIndex(
          (spGH) => spGH.maSP === action.spGioHang.maSP
        );
        if (index !== -1) {
          gioHangUpdate[index].soLuong += 1;
        } else {
          gioHangUpdate.push(action.spGioHang); //Nếu không tìm thấy thì push sp lên giỏ hàng
        }
        //B3: Cập nhật lại state.gioHang => bước này giống như this.setState tại components
        state.gioHang = gioHangUpdate;
        return { ...state }; //Object hoăc array thì có ba chấm
      }
      break;

    case "THAY_DOI_SO_LUONG":
      {
        const gioHangUpdate = [...state.gioHang];
        //Kiểm tra sản phẩm có trong giỏ hàng ko
        let index = gioHangUpdate.findIndex(
          (spGH) => spGH.maSP === action.maSP
        );
        if (index !== -1) {
          gioHangUpdate[index].soLuong += action.soLuong;
          //   if (gioHangUpdate[index].soLuong <= 0) {
          //     alert("Số lượng không hợp lệ!");
          //     gioHangUpdate[index].soLuong -= action.soLuong;
          //     return;
          //   }
        }
        //Cập nhật lại state
        state.gioHang = gioHangUpdate;
        return { ...state };
      }
      break;
    case "XOA_SAN_PHAM":
      {
        let gioHangUpdate = [...state.gioHang];
        gioHangUpdate = gioHangUpdate.filter(
          (spGH) => spGH.maSP !== action.maSP
        );
        //Cập nhật lại state giỏ hàng
        state.gioHang = gioHangUpdate;
        return { ...state };
      }
      break;
    default:
      break;
  }
  return { ...state };
};
