import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import './App.css';


function App() {
  return (
    <div>
     
    <div className="wrapper ">
          <Drawer/>
      <Header/>
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>All Things That You Want to buy</h1>
          <div className='search-block d-flex'>
            <img src='./img/search.jpg' width="12" height="12" alt='search'/>
            <input placeholder='search please...'/>
          </div>
          
        </div>
        <div className='d-flex'>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           
          </div>
          
      
    </div>
    </div>
    </div>
  );
}

export default App;
