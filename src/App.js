import React from 'react';
import Header from "./components/Header.js";
import Rightbar from "./components/Rightbar.js";
import Category from "./components/Category.js";
import {Routes, Route} from "react-router-dom";
import Surprise from "./components/Surprise.js"

function App() {
 
  return(<div>
   <Header></Header>
   <Rightbar ></Rightbar>
   <Routes>
      <Route path="/Categories" element={<Category/>} />
      <Route path="/Surprise-Dish" element={<Surprise/>} />
      
    </Routes>

  
   </div>
  );
}

export default App;
