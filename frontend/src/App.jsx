import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'

import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Login from './pages/Login'


import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] lg:px-[9vw] border-5  '>
    
     <Navbar/>
     <SearchBar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Collection' element={<Collection/>}/>
     <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<PlaceOrder/>}/>
      <Route path='/orders' element={<Orders/>}/>

     </Routes>
     <Footer/>

     
    </div>
  )
}



export default App


{/* <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/proudcut/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/pace-order' element={<PlaceOrder/>}/>
      <Route path='/orders' element={<Orders/>}/>
    
     </Routes> */}