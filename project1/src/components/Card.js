
function Card (){
    return(
     <div  className= 'card'>
        <div className="favorite">
            
          <img src="./img/like.png" width="12" height="11" alt="unliked"/>
          </div>

          <img className="things" src="./img/100.jpg" alt="thingsa"/>
           
           <h5> For the best men or women</h5>
           <div className="d-flex justify-between align-right">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b> 1000$</b>
            </div>
            <button className="button">
            <img  width={13} height={13} src="./img/plus2.png" alt="Plus"/>
            </button>
           </div>


           </div>
       

   
    



    )
}
export default Card;