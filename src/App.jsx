
import './App.css'
import Welcome from './components/Welcome'
import Employee from './components/Employee'
import ProductCategory from './components/ProductCategory'
import ProductList from './components/ProductList'

function App() {
   const categories =["Mobile","Laptop","Electronic","HeadPhone"];
   const productDetails ={productName: " Iphone 15pro", price: 50000, isAwailable: false}
  return (
    <>
     <h1>My First React App</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ipsam?</p>
     <h2> App Component</h2>

     <Welcome/>


     <Employee name="john" city="Pune"/>
     <Employee name="David" city="Mumbai"/>
     <Employee name="Gaytri" city="Solapur"/>
     <Employee name="Ajinkya" city="KOlhapur"/>
     <ProductCategory categoriesArr ={categories} productDetails={productDetails} />
     
     <ProductList/>
    </>
  )
}

export default App
