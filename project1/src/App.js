import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';
import './App.css';






 

function App() {

  const [items, setItems]=React.useState([]);
  const [cartItems, setCartitems]=React.useState([]);
  const [searchValue, setSearchValue]=React.useState('');

  const [basketOpen, setBasketOpen] = React.useState(false);

   React.useEffect (()=> {
    fetch ('https://63611a6367d3b7a0a6bdfcd8.mockapi.io/items')
   .then((res) => {
    return res.json();
       })
       .then ((json) =>{
        setItems(json);
       });
       
   }, []);
       


       const onAddToCart = (obj) =>{
        setCartitems(prev =>[...prev, obj]);
               }

               
               const removeFromBasket = (obj) => {
                setCartitems.filter((el)=> el.title !==obj);
              };


              const onСhangeSearchInput = (event)=>{
                
                setSearchValue(event.target.value)
              }
  return (

    
    <div>
     
      <div className="wrapper ">

          {basketOpen? <Drawer items={cartItems}  removeFromBasket={removeFromBasket} onClose={()=> setBasketOpen(false)}/>: null}

      <Header onClickBasket={()=> setBasketOpen(true)} />
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>{searchValue ? `search thing : "${searchValue}"`: 'All Things That You Want to buy' }</h1>
          <div className='search-block d-flex'>
            <img onClick={()=>setSearchValue('')} src='./img/search.jpg' width="12" height="12" alt='search'/>
            <input onChange={onСhangeSearchInput} placeholder='search please...'/>
          </div>
          
        </div>
        <div className='d-flex flex-wrap padding 10 '>
                 
         {items.filter(item=>item.title.includes(searchValue)).map ((item) => (
           <Card 
           key = {item.title}
           title={item.title} 
           price={item.price} 
           imageUrl={item.imageUrl}
           onClickFavorite={()=>console.log("my")}
           onClickPlus={(obj)=>onAddToCart(obj)}
           />
           ))} 
           
          </div>     
    </div>
    </div>
    </div>
  );
}

export default App;
