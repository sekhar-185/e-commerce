import {createContext, useEffect} from 'react';
import {products} from '../assets/assets';
import {useState} from 'react';
import {toast} from 'react-toastify';


export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const currency="RS.";
    const delivery_fee=10;
    const [search,setSearch]=useState("");
    const [cartItems,setCartItems]=useState({});
    const [showSearch,setShowSearch]=useState(false);

const addToCart =async (itemId,size)=>{

    if(!size)
    {
        toast.error('Select Product size');
        return
    }

let cartData=structuredClone(cartItems);


if(cartData[itemId])
{
    if(cartData[itemId][size])
    {
        cartData[itemId][size]+=1
    }
    else{
        cartData[itemId][size]=1
    }
}
else{
    cartData[itemId]={}
    cartData[itemId][size]=1
}
setCartItems(cartData);
}
const getCartCount=()=>{
    let totalCount=0;
    for(const items in cartItems)
    {
        for(let item in cartItems[items])
        {
            try{
                if(cartItems[items][item]>0)
                {
                    totalCount+=cartItems[items][item]
                }
            }
            catch (error)
            {

            }
        }
    }
    return totalCount;
}

useEffect(()=>{
    console.log(cartItems);
},[cartItems])

    const value={
        products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount

    }

    return (
            <ShopContext.Provider value={value}>
                {props.children}
            </ShopContext.Provider>
    )

}
export default ShopContextProvider;