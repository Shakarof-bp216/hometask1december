import React, { children, createContext, useState } from 'react'

export const MainContext = createContext()

function BasketProvaider({ children }) {
  const [basket, setBasket] = useState([])

  function addBasket(item) {
    const elemenIndex = basket.findIndex(x=>x.id === item.id)
    if (elemenIndex=== -1) {
      setBasket([...basket,{...item,count:1}])
      return
    }
    basket[elemenIndex].count++
    setBasket([...basket])
    
  }
  function dec(item) {
    const elemenIndex = basket.findIndex(x=>x.id === item.id)
    if (count===0) {
      return
    }
    basket[elemenIndex].count--
    setBasket([...basket])
  }
  function remove(item) {

    setBasket(basket.filter(x=>x.id !== item.id))
  }

  function getTotal() {
   return basket.reduce((memory,initial)=>memory+(initial.price * initial.count), 0 )
    
  }
  

  return (
    <MainContext.Provider value={{ basket, setBasket,addBasket,dec,remove,getTotal}}>{children}</MainContext.Provider>
  )
}

export default BasketProvaider