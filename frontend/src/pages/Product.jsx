import React, { useEffect ,useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Product = () => {

   const {productId}=useParams();
   const {products,currency}=useContext(ShopContext);
   const [productData,setProductData]=useState(false);
   const [image,setImage]=useState("");
   console.log(productId);

   const fetchProductData= async ()=>{
   products.map((item)=>{
    if(item._id==productId)
    {
      setProductData(item);
      setImage(item.image[0]);
      console.log(item);
      return null
    }
   })
  }
  useEffect(()=>{
    fetchProductData();

  },[productId,products])
  return productData ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/*product data*/}
      <div className="flex gap-12 flex-col sm:flex-row border">
        {/*product images*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row border">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full border">
            {
              productData.image.map((item,index)=>(
                <img key={index} onClick={()=>setImage(item)} src={item} alt="" className=" w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%] border">
            <img src={image} alt="" className="w-full h-auto " />
          </div>
          </div>
          {/*product info*/}
          <div className="flex-1 border">
            <h1 className="font-medium text-2xl mt-2">
              {productData.name}
            </h1>
            <div className="flex items-center gap-1 mt-2">
               <img src={assets.star_icon} alt="" className="w-3.5" />
               <img src={assets.star_icon} alt="" className="w-3.5" />
               <img src={assets.star_icon} alt="" className="w-3.5" />
               <img src={assets.star_icon} alt="" className="w-3.5" />
               <img src={assets.star_icon} alt="" className="w-3.5" />
            </div>
            <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
            <p className="mt-5 text-gray-600 md:w-4/5">{productData.description}</p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select size</p>
              <div className="flex gap-2">
                {
                  productData.sizes.map((item,index)=>{
                    return <button className='border border-gray-200 py-2 px-4 bg-gray-100' key={index}>{item}</button>
                  })
                }
              </div>
              
            </div>
          </div>

      </div>
     
    </div>
  )  : <div className="opacit-0"></div>
}

export default Product
