import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'


function Main() {
  return (
    <main className='p-4 text-black grow mi-main bg-white'>
      
 <Routes>

<Route path='/' element={<ItemListContainer/>} />
<Route path='/category/:id' element={<ItemListContainer/>} />

<Route path='/item/:id' element={<ItemDetailContainer/>} />


</Routes>

    </main>
  )
}

export default Main