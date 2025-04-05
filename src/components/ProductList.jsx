import React from "react";
import ProductDetalil from "./ProductDetalil";
const ProductList = ()=>{
  const products = [
    {
       id:1,
       name:"chair",
       Price: 16000,
       Image:"https://m.media-amazon.com/images/I/61aqztnRCeL._SL1500_.jpg",
       Description:"Green Soul Oslo Premium Boss Chair | Minimal Scandinavian Design | Ergonomic Faux Leather Executive Office Chair with Cushioned Seat | Chrome Finish | High..."
    },

    {
      id:2,
      name:"Laptop ",
      Price: 70000,
      Image: "https://m.media-amazon.com/images/I/71p8u7Upw1L._SL1500_.jpg" ,
      Description:"HP 15, 12th Gen Intel Core i5-1235U, 16GB DDR4, 512GB SSD, (Win 11, Office 21, Silver, 1.69kg), Anti-Glare, 15.6-inch(39.6cm) FHD Laptop, Intel Iris Xe.."
}
  ]
  function pop(){
    alert("add to cart");
  }
 return(
<>
<div className="container">
  <div className= "row">

  <h2>Product List</h2>
  
  {products.map ((product)=>(
    <div className="col-md-4"> 
    <ProductDetalil productObj={product} and toCart={pop}/>
    </div>
  ))}

</div>
</div>

</>
  )


}

export default ProductList;