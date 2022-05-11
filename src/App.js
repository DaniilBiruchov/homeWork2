import React, {useEffect, useState, useContext} from "react";
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
import { ThemeContext } from "./contex"
import Reviews from "./companents/pages/Reviews";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [background, setBackground] = useState()
  const { theme } = useContext(ThemeContext)
  
  useEffect(() => {
    if (theme === 'dark') {
      setBackground('dark')
    } else  {
      setBackground('')
    }
  }, [theme])
  

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  })



  return (
    <div className={`App ${background}`}>
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<PostId />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/about-us" element={<Navigate to="/about"/>}/>
            <Route path="/reviews" element={<Reviews/>}/>
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
