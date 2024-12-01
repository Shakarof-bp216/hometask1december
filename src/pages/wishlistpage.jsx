import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Favorite } from '../context/WishlistProvaider';

function Wishlistpage() {
  const { wish, removewish } = useContext(Favorite);

  return (
    <>
      <Helmet>
        <title>Wishlistpage</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="cartcontanier">
        {wish.map((x) => (
          <div className="cards" key={x.id}>
            <div className="img_contanier">
              <img src={x.thumbnail} alt={x.title} />
            </div>
            <h4>{x.title}</h4>
            <p>{x.price}</p>
            <button onClick={() => removewish(x)} className="dlt_btn">x</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlistpage;
