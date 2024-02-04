import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import MyToolkit from './components/MyToolkit';
import Port from './components/Port';
import Portifolio from './components/Portifolio';
import Third from './components/Third';
import Footer from './components/Footer';
import DiscoverTay from './pages/DiscoverTay';
import MyPortfolio from './pages/MyPortfolio';
import ContactTay from './pages/ContactTay';





function App() {
  return (
    <>
   
    <Router>
       <Header />
       <Banner />
       <About/>
       <MyToolkit/>
       <Port/>
       <Portifolio/>
       <Third/>
       <Footer/>
      <Routes>
        <Route element={<DiscoverTay/>}exact path='/DiscoverTay' />
        <Route element={<MyPortfolio/>}exact path='/MyPortfolio' />
        <Route element={<ContactTay/>}exact path='/ContactTay' />
       
      </Routes>
    </Router>
    </>
  );
}

export default App;
