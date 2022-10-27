function Drawer (){
    return(
     <div style={{display: 'none'}} className= 'overlay'>
        <div className="drawer">
            <h2 className="d-flex justify-between ml-20">
                Basket <img className="basket" src="./img/basket.svg" width="42" height="41" alt="Remove"/>
            </h2>
           <div className="items">
             <div className="cartItem d-flex align-center mb-10">
                <div>
                    <img src="./img/1001.png" width="42" height="41" alt="ff" />
                </div>
                <div className="mr*-20 display flex">
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