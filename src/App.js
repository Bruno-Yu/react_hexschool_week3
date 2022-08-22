// 從react-router-dom import 元件 
// 可參考 react-router-dom 的官網 https://reactrouter.com/docs/en/v6/hooks/use-navigate
import { Routes, Route } from "react-router-dom";
// import logo from './images/logo.svg';
import './css/App.css';
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FAQ } from "./components/FAQ";
import { Tour } from "./components/Tour";
import { TourList } from "./components/TourList";
import { TourDetail } from "./components/TourDetail";



// APP 主元件，這邊放路由標籤
function App() {
  return (
    <div className="App">
        <h1>哇哩 首頁捏 酷酷的高雄旅遊網(請自行想像)</h1>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='tour' element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path=":Id" element={ <TourDetail />} />
          </Route>
        </Route>
    </Routes>
    </div>
  );
}

export default App;
