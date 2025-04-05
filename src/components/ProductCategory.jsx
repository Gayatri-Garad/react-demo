import React from "react";

function ProductCategory (props){
  console.log(props);
  // const{categoriesArr,productDetails} = props;
  const categoriesArr = props
    return(
   <>

   <h2>Categouries</h2>
    {/* <ul>
      <li>props.categoriesArr[0]</li>
      <li>props.categoriesArr[1]</li>
      <li>props.categoriesArr[2]</li>
    </ul>
     */}

     <ul>
      {categoriesArr.map ((el, index)=>
        <li key={index}>{el}</li>
      )}
     </ul>

     <div>
      <p>Product Name:{productDetails. productName}</p>
      <p>Price:{productDetails. price}</p>
      <p>Available:{productDetails.isAwailable ? ' yes':' no'}</p> 
     </div>

     <button type="button" className="btn btn-primary">Primary</button>
       <button type="button" className="btn btn-secondary">Secondary</button>
       {/* <button type="button" className="btn btn-success">Success</button> */}

  </>
  )

}

export default ProductCategory;