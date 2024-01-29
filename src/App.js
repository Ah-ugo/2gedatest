import "./App.css";

import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellAnItem from "./Pages/SellAnItem";
import UploadImages from "./Pages/UploadImages";
import PreviewItem from "./Pages/PreviewItem";
import Category from "./Pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellItem" element={<PreviewItem />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
