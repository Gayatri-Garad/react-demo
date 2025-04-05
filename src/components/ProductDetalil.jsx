import React from "react";
const ProductDetalil = (props) => {
   console.log(props);
   const styles={
    width:"18rem"
}
   const product =props.productObj;
   console.log("Product",product);
  return(
<>
  <div className="container">
  <div className="card" style={styles}>
      <img  src={product.Image} className= "card-img-top"alt="..."/>
      <div className="card-body">
       <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.Description}</p>
    <p className="card-text">Price:{product.Price}</p>
    <button className="btn btn-primary " onClick={()=>props.toCart()}
>Add to Cart </button>
  </div>
</div>
 
  </div>
</>
 )

}

export default ProductDetalil;