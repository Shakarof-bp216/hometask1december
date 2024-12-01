import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { MainContext } from '../context/BasketProvaider'
import { Favorite } from '../context/WishlistProvaider'

function Basketpage() {
  const { basket, addBasket, remove, dec, getTotal } = useContext(MainContext)
  const {addWishlist} =useContext(Favorite)
  return (
    <>
      <Helmet>
        <title>Basketpage</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="cartcontanier">
        {basket.map((x) => (
          <div className='cards'>
            <div className='img_contanier'><img key={x.id} src={x.thumbnail} alt={x.title} /></div>
            <h4>{x.title}</h4>
            <p>{x.price}</p>
            <div className="quantity">
              <button className='add_btn' onClick={() => addBasket(x)}>+</button>
              <h2>{x.count}</h2>
              <button className='add_btn' onClick={() => dec(x)}>-</button>
            </div>
            <button onClick={() => remove(x)} className='dlt_btn'>x</button>
            <div key={x.id} onClick={() => addWishlist(x)} className='favorite'><i key={x.id} className="fa-solid fa-heart"></i></div>
          </div>
        ))}
        <div className="total_page">
          <div className="total_container">
            <h3 className="total_label">Total Price:</h3>
            <p className="total_value">{getTotal().toFixed(2)}</p>
          </div>
        </div>

      </div>

    </>
  )
}

export default Basketpage