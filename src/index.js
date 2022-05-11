import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {ThemeContext} from './contex'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css'

const Main = () => {
  const [theme, setTheme] = useState('light')
  return (
    <Provider store = {store}>
      <BrowserRouter>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <App />
      </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

