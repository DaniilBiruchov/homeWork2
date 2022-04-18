import React from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Posts from "./companents/pages/Posts";
import Home from "./companents/pages/Home.jsx"
import About from "./companents/pages/About";
import NotFound from "./companents/pages/NotFound";
import Layout from "./companents/pages/Layout";
import PostId from "./companents/pages/PostId";

function App() {
  
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posts/:id" element={<PostId />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
