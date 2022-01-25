import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Store from '../pages/Store';
import About from '../pages/About';
import '../styles/global.css'

 function App() {
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
            
            <Route path="/" element={<Home/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
