
function Card (props){

    
    return(
     <div  className= 'card'>
        <div className="favorite">
            
          <img src="./img/like.png" width="12" height="11" alt="unliked"/>
          </div>

          <img className="things" src={props.imageUrl} alt="thingsa"/>
          
           <h5>{props.title}</h5>
           <div className="d-flex justify-between align-right">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b> {props.price}$</b>
            </div>
            <button className="button" onClick={props.onClick}>
            <img  width={13} height={13} src="./img/plus2.png" alt="Plus"/>
            </button>
           </div>


           </div>
       

   
    



    )
}
export default Card;