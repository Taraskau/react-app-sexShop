
import React from "react";
function Card ({title, imageUrl,price,onClickFavorite,onClickPlus}){
   
    const [isAdded,setIsAdded]=React.useState(false)

    const onPlus=()=>{
        onClickPlus({title, imageUrl,price});
        setIsAdded(!isAdded);
    };
    
    return(
     <div  className= 'card'>
        <div className="favorite" onClick={onClickFavorite}>
            
          <img src="./img/like.png" width="12" height="11" alt="unliked"/>
          </div>

          <img className="things" src={imageUrl} alt="thingsa"/>
          
           <h5>{title}</h5>
           <div className="d-flex justify-between align-right">
            <div className="d-flex flex-column mb-40">
                <span>Цена:</span>
                <b> {price}$</b>
            </div>
            
            <img className='plus' onClick={onPlus}width={13} height={13} src={isAdded? "./img/btn-cheked.jpg": "./img/plusWhite.png"} alt="Plus"/>
            
           </div>


           </div>
       

   
    



    )
}
export default Card;