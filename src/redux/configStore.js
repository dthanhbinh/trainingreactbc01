import { combineReducers, createStore } from "redux";
import { baiTapGameReducer } from "./reducers/BaiTapGameXucXacReducer";
import { gioHangReducer } from "./reducers/GioHangReducer";
import { gameKeoBuaBaoReducer } from "./reducers/BaiTapGameKeoBuaBaoReducer";
const rootReducer = combineReducers({
  gioHangReducer: gioHangReducer,
  //state theo từng nghiệp vụ
  baiTapGameReducer: baiTapGameReducer,
  gameKeoBuaBaoReducer: gameKeoBuaBaoReducer,
});

export const store = createStore(rootReducer);
