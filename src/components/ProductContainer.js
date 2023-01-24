// main component // parent component that holds all components

import React, {useState, useEffect} from "react";


import ProductCard from "./ProductCard"


function ProductContainer(){

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/products")
    .then((res) => res.json())
    .then((products) => setProducts(products))
  }, [])
 
    return(
        <>
                
       <ProductCard products = {products}/>
        
        </>
    )
}

export default ProductContainer;