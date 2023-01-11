import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/category-page";
import FavouriretePage from "./pages/favourite-page";
import RecomendedPage from "./pages/recomended-page";
import NoPageFound from "./pages/NoPageFound";
import './App.css';

function App() {  

  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoryPage/>}/>
          <Route path="/favourites" element={<FavouriretePage/>}/>
          <Route path="/recomended" element={<RecomendedPage/>}/>
          <Route path="*" element={<NoPageFound/>}/>
          <Route path="biano_project" element={<CategoryPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
