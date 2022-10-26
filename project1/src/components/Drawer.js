function Drawer (){
    return(
     <div style={{display: 'block'}} className= 'overlay'>
        <div className="drawer">
            <h2 className="d-flex justify-between mb*-30">
                Basket <img className="cu-p" src="./img/basket.svg" width="42" height="41" alt="Remove"/>
            </h2>
           <div className="items">
             <div className="cartItem d-flex align-center mb-15">
                <div 
                style = {{backgroundImage: 'url(/img/thing/1.jpg'}}
                className='cartItemImg'></div>
                <div className="mr*-20 flex">
                    <p className="mb-5">model for men
                        
                    </p>
                    <b> 1000$</b>
                </div>
                <img className="removeBtn" src="./img/remove.svg" width="42" height="41" alt="Remove"/>
                </div>
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