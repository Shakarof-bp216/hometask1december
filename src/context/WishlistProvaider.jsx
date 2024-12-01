import React, { createContext, useState } from 'react'
 

   export const Favorite = createContext()

function WishlistProvaider({children}) {

    const [wish, setWish] = useState([])
    const addWishlist = (item)=>{
        const elemenIndex = wish.findIndex(x=>x.id === item.id)
        if (elemenIndex=== -1) {
          setWish([...wish,{...item,count:1}])
          return
        }   
        wish[elemenIndex].count++
        setWish([...wish])
    }
    function removewish(item) {

        setWish(wish.filter(x=>x.id !== item.id))
      }
  return (
    <Favorite.Provider value={{ wish, setWish,addWishlist,removewish}}>{children}</Favorite.Provider>
  )
}

export default WishlistProvaider