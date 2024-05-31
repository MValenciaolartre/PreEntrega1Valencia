import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from './Cart'



function Main() {
  return (
    <main className='p-4 text-black grow mi-main bg-white'>
      
 <Routes>

<Route path='/' element={<ItemListContainer/>} />
<Route path='/category/:id' element={<ItemListContainer/>} />


<Route path='/item/:id' element={<ItemDetailContainer/>} />
<Route path="/carrito/" element={<Cart/>} />

</Routes>

    </main>
  )
}

export default Main