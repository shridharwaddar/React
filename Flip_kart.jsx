import React from "react";

const Flip_kart=()=>{
    return(
        <div className="Flip_kart">
            <div className="Flip_logo">
                <span><img src="https://tse2.mm.bing.net/th?id=OIP.2EOnrRYRmNsREN9zcLpTNgHaCF&pid=Api&P=0" alt="" /></span>
                
                <input type="text"  placeholder="search product,brands"/>
                
            </div>
            <div className="Flip_login">
                <button>Login</button>
            </div>
            <div className="Flip_menu">
                     
        <ul>
            <li>Become a Seller</li>
            <li>
                <select value="more">
                <option value="more">More</option>
                    <option value="more">Notification</option>
                    <option value="more">24 X 7 Customer care</option>
                    <option value="more">Download App</option>
                </select>
            </li>
            <li>Cart</li>
        </ul>
            </div>
        </div>
    )
}
export default Flip_kart;