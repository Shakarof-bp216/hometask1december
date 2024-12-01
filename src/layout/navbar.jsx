import React, { useContext } from 'react'
import  "./navbar.css";
import { Link, NavLink } from 'react-router-dom';
import { MainContext } from '../context/BasketProvaider';
import { Favorite } from '../context/WishlistProvaider';
function Navbar() {
  const {basket} =useContext(MainContext)
  const {wish} =useContext(Favorite)

  return (
    <> 
      {/* <!-- navbar Start --> */}
    <nav className="navbar">
        <div className="contanier">
            <div className="navbar_flexbox">
                <div className="navbar_start_bootstrap">
                    <h1>Home Task</h1>
                </div>
                <div className="navbar_hidden_menu">Menu<i className="fa-solid fa-bars"></i></div>
                <ul className="navbar_right_menu">
                    <li><Link to="/">Home <sup></sup></Link></li>
                    <li><Link to="/basketpage">Basket <sup className='bskt_num'>{basket.length}</sup></Link></li>
                    <li><Link to="/wishlistpage">Wishlist <sup>{wish.length}</sup></Link></li>
                    <li><Link to="/todolistpage">Todo <sup></sup></Link></li>
                </ul>
            </div>
        </div>
    </nav>
    <div className='hidden_box'></div>
    {/* <!-- navbar end --> */}
    </>
  )
}

export default Navbar