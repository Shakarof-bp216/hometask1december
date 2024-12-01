import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MainContext } from '../context/BasketProvaider';
import { Favorite } from '../context/WishlistProvaider';
import("./index.css")
function Homepage() {
  const [products, setProducts] = useState([]);
  const { addBasket } = useContext(MainContext)
  const { addWishlist } = useContext(Favorite)



  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((data) => setProducts(data.carts));
  }, []);


  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="cartcontanier">
        {products.map((cart) =>
          cart.products.map((x) => (
            <div key={x.id} className='cards'>
              <div className='img_contanier'><img key={x.id} src={x.thumbnail} alt={x.title} /></div>
              <h4>{x.title}</h4>
              <p>{x.price}</p>
              <button className='add_btn' onClick={() => addBasket(x)}>Add</button>
              <div key={x.id} onClick={() => addWishlist(x)} className='favorite'><i key={x.id} className="fa-solid fa-heart"></i></div>
            </div>
          )))}

      </div>
    </>
  );
}

export default Homepage;
