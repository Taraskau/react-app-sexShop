function Drawer ({onClose, items = [] , removeFromBasket}) {
    return(
     <div  className= 'overlay'>
        <div className="drawer">
            <h2 className="d-flex justify-between ml-20">
                Basket <img onClick ={onClose} className="cu-p" src="./img/plusWhite.png" width="22" height="21" alt="close"/>
            </h2>
           <div className="items">
            {items.map((obj) => (
                
                <div className="cartItem d-flex align-center mb-20">
                <img  src={obj.imageUrl} 
                className="cartItemImg" alt="1">
               </img>

                <div className="mr*-20 display flex">
                    <p className="mb-5">{obj.title}</p>          
                    
                    <b> {obj.price}$</b>
                </div>
                <img onClick={removeFromBasket} className="removeBtn" src="./img/remove.svg" width="22" height="21" alt="Remove"/>
                </div>
             
            ))}
             
             </div>

             <div className="cartTotalBlock">
                <ul>
                    <li>
                        <span> <em>Итого:</em></span>
                        <div></div>
                        <b> 1000$</b>
                       </li>
                </ul>
                <button className="greenButton">
                    ОФОРМИТЬ ЗАКАЗ <img src="./img/arrow.png" width="22" height="22" alt="Arrow"/>
                     </button>
             </div>
           </div>
        </div>

   
    



    )
}
export default Drawer;