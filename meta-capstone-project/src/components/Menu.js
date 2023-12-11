export default function Menu() {
    const handleOrder =(id)=>{
        
    }
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="cards">
                <div className="menu-items">
                    <img src="https://i.ibb.co/68c9bLv/greek-salad.jpg" alt="greek salad" />
                    <div className="menu-content">
                        <div className="heading">
                            <h5>Greek Salad</h5>
                            <p>$12.99</p>
                        </div>
                        <p>The famous greek salad of crispy lettuce,
                            peppers, olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons. </p>
                        <button className="orderBtn"  onClick={()=>handleOrder(1)}>Order Now</button>
                    </div>
                </div>
                <div className="menu-items">
                    <img src="https://i.ibb.co/317GqZv/Bruchetta.png" alt="bruchetta" />
                    <div className="menu-content">
                        <div className="heading">
                            <h5>Bruchetta</h5>
                            <p>$5.99</p>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has
                            been smeared with garlic and seasoned with salt and olive oil.  </p>
                        <button className="orderBtn" onClick={()=>handleOrder(2)}>Order Now</button>
                    </div>
                </div>
                <div className="menu-items">
                    <img src="https://i.ibb.co/sm6MfcH/desert.jpg" alt="lemon-dessert" />
                    <div className="menu-content">
                        <div className="heading">
                            <h5>Lemon Dessert</h5>
                            <p>$5.00</p>
                        </div>
                        <p>This comes straight from grandma’s recipe book,
                            every last ingredient has been sourced and is as
                            authentic as can be imagined. </p>
                        <button className="orderBtn" onClick={()=>handleOrder(3)}>Order Now</button>
                    </div>
                </div>
            </div>
        </div >
    )
}


