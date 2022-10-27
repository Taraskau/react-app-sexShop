import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import './App.css';


const array=[
  {title: "falas modal 1", price:'1000$', imageUrl:"./img/2.jpeg" },
  {title: "falas modal 2", price:'1200$', imageUrl:"./img/1.png" },
  {title: "falas modal 3", price:'1300$', imageUrl:"./img/100.jpg" },
  {title: "falas modal s", price:'1400$', imageUrl:"./img/1001.png" },
 ];

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
                 
         {array.map ((obj) => (
           <Card 
           title={obj.title} 
           price={obj.price} 
           imageUrl={obj.imageUrl}
           onClick={()=>alert(obj.price+obj.title)}/>
           ))} 
           
          </div>     
    </div>
    </div>
    </div>
  );
}

export default App;
