function Header (props){
    return(
    <header className="d-flex justify-between align-center p-40">
        <div className="d-flex alighn-center">
          <img width={40} height={40} src="./img/1.png" alt="logo"/>
          <div>
            <h3 className="text-uppercase"> Sex Shop</h3>
            <p className="opacity-5"> We know that you Want</p>
              
          </div>
        </div>
        <ul>
            <li onClick ={props.onClickBasket} className="mr-30 cu-p">
                <img width={20} height={20} src="./img/basket.svg" alt="logocart"/>
                <span>1000 $</span>

            </li>
        </ul>

    </header>



    )
}
export default Header;