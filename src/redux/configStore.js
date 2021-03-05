import { combineReducers, createStore } from "redux";
import { baiTapGameReducer } from "./reducers/BaiTapGameXucXacReducer";
import { gioHangReducer } from "./reducers/GioHangReducer";

const rootReducer = combineReducers({
  gioHangReducer: gioHangReducer,
  //state theo từng nghiệp vụ
  baiTapGameReducer: baiTapGameReducer,
});

export const store = createStore(rootReducer);
