import React, {useEffect, useState} from "react";
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Posts from "./companents/pages/Posts";
import Home from "./companents/pages/Home.jsx"
import About from "./companents/pages/About";
import NotFound from "./companents/pages/NotFound";
import Layout from "./companents/pages/Layout";
import PostId from "./companents/pages/PostId";
import Login from "./companents/pages/Login";
import RequireAuth from "./hoc/RequireAuth";
import EditPost from "./companents/pages/EditPost";
import { AuthContext } from "./contex";

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  })
  return (
    <div className="App">
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<PostId />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/about-us" element={<Navigate to="/about"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/posts/:id/edit" element={
              <RequireAuth>
                <EditPost/>
              </RequireAuth>
            }/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
