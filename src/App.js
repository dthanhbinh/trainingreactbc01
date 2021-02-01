import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFunc';
import HeaderClass from './components/HeaderClass';
import BaiTapLayout from './components/BaiTapLayout/BaiTapLayout';
import BTHeader from './components/BaiTapLayout/BTHeader';
import BTSlider from './components/BaiTapLayout/BTSlider';
import BTProductPhone from './components/BaiTapLayout/BTProductPhone';
import BTProductLaptop from './components/BaiTapLayout/BTProductLaptop';
import BTPromotion from './components/BaiTapLayout/BTPromotion';
import BTProductList from './components/BaiTapLayout/BTProductList';
import DataBinding from './DataBinding/DataBinding';
import BTLRHeader from './components/BaiTapLayoutReact/BTLRHeader';
import BTLRFooter from './components/BaiTapLayoutReact/BTLRFooter';
import BTLRProductlist from './components/BaiTapLayoutReact/BTLRProductlist';
import BTLRContent from './components/BaiTapLayoutReact/BTLRContent';

function App() {
  return (
    <div className="App">
     <BTLRHeader/>
     <BTLRContent/>
     <BTLRFooter/>
    </div>
  );
}

export default App;
