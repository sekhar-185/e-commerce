import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products}=useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(true);
  const [filterProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subcatogory,setSubCategory]=useState([]);

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value))
    {
      setCategory((p)=>(p.filter(item=>item!==e.target.value)))
    }
    else{
      setCategory(pre=>[...pre,e.target.value])
    }
  }

  const toggleSubcategory=(e)=>{
    if(subcatogory.includes(e.target.value))
    {
      setSubCategory(pre=>(pre.filter(item=>item!==e.target.value)))
    }
    else{
      setSubCategory(pre=>[...pre,e.target.value]);
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,subcatogory]);

  const applyFilter=()=>{
    let productsCopy=products.slice();
    console.log(productsCopy);
    if(category.length>0)
    {
      productsCopy=productsCopy.filter(item=>(category.includes(item.category)))
    }
    console.log(productsCopy)
    setFilterProducts(productsCopy);
  }
  
  useEffect(()=>{
    setFilterProducts(products)

  },[])

  useEffect(()=>{
    console.log(category)

  },[category])

 
 
    
  return (
    <div className='flex flex-col sm:flex-row gap-1 pt-10 border-t '>
      {/*filter options*/}
      <div className="min-w-60 border">
        <p className='my-2 text-xl font-semibold flex items-center border gap-2'>FILTER
          <img onClick={()=>{setShowFilter((s)=>(!s))}} src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''} transition-all duration-800`} />
        </p>
        {/* category filter*/}
        <div className={`  border border-gray-300 pl-5 py-3 mt-6 ${ showFilter ? '':'hidden'} transition-all duration-800`}>
          <p className="mb-3 text-sm font-medium">CATOGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 border">
              <input type="checkbox" value={'men'} className="w-3" onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={'women'} className="w-3" onChange={toggleCategory}/>
              Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={'kids'} className="w-3" onChange={toggleCategory}/>
              Kids
            </p>

          </div>
        </div>

        {/*subcatogory*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ showFilter ? 'block':'hidden'}`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={'Topwear'} className="w-3"  onChange={toggleSubcategory}/> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={'Bottomwear'} className="w-3" onChange={toggleSubcategory}/>
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={'Winterwear'} className="w-3" onChange={toggleSubcategory}/>
              Winterwear
            </p>

          </div>
        </div>

      </div>
      {/* right side*/}

      <div className="flex-1 border mt-6">
        <div className="flex justify-between text-base sm:text-2xl mb-4 border">
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>
          {/*product sort */}
          <select className='border-3 rounded-md border-gray-300 text-sm px-2'  name="" id="">

            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        {/*map*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
             {
              filterProducts.map((item,index)=>(
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
              ))
             } 
        </div>
      </div>
      
    </div>
  )
}

export default Collection
