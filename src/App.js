import "./App.css";

import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellAnItem from "./Pages/SellAnItem";
import UploadImages from "./Pages/UploadImages";
import PreviewItem from "./Pages/PreviewItem";
import Category from "./Pages/Category";
import ProductDetail from "./Pages/ProductDetail";
import MyStore from "./Pages/MyStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellItem" element={<SellAnItem />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/store" element={<MyStore />} />
        <Route path="/prevItem" element={<PreviewItem />} />
        <Route path="/uploadItem" element={<UploadImages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
