import logo from "./logo.svg";
import "./App.css";
import HeaderFunc from "./components/HeaderFunc";
import HeaderClass from "./components/HeaderClass";
import BaiTapLayout from "./components/BaiTapLayout/BaiTapLayout";
import BTHeader from "./components/BaiTapLayout/BTHeader";
import BTSlider from "./components/BaiTapLayout/BTSlider";
import BTProductPhone from "./components/BaiTapLayout/BTProductPhone";
import BTProductLaptop from "./components/BaiTapLayout/BTProductLaptop";
import BTPromotion from "./components/BaiTapLayout/BTPromotion";
import BTProductList from "./components/BaiTapLayout/BTProductList";
import DataBinding from "./DataBinding/DataBinding";
import BTLRHeader from "./components/BaiTapLayoutReact/BTLRHeader";
import BTLRFooter from "./components/BaiTapLayoutReact/BTLRFooter";
import BTLRProductlist from "./components/BaiTapLayoutReact/BTLRProductlist";
import BTLRContent from "./components/BaiTapLayoutReact/BTLRContent";
import BaiTapChonXe from "./StateReact/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapRenderWithMap from "./RenderWithMap/BaiTapRenderWithMap";
import DemoProps from "./Props/DemoProps";
import BaiTapThuKinh from "./BaiTapStatePropThuKinh/BaiTapThuKinh";
import DemoQuanLySanPham from "./Props/DemoQuanLySanPham/DemoQuanLySanPham";
import BTGioHangRedux from "./DemoRedux/BTGioHangRedux/BTGioHangRedux";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <BaiTapThuKinh /> */}
      {/* <DemoQuanLySanPham /> */}
      <BTGioHangRedux />
    </div>
  );
}
export default App;
