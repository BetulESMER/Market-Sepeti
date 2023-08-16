
import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Product from "./components/Product"
import products from "./components/product.json"
import Sepet1 from "./components/Sepet1.js"


function App() {
  const [sepet, setSepet]= useState([])
  const [total, setTotal]= useState(0)
  const [inputText, setInputText]=useState("")
  useEffect(()=>{
    setTotal( sepet.reduce((acc,item)=>{
       return acc + (item.amount * (products.find(product=>product.id===item.id).fiyat))}, 0 ))
      }, 
      [sepet])
 
      
  return (
    <>
    <div>
     
    <Header total={total} inputText={inputText} setInputText={setInputText}
    />
    {total>0 &&(<Sepet1 products={products} total={total} sepet={sepet}/>)}
    <div className="container products">
       {products.map(product =>(
      <Product key={product.id} total={total} sepet={sepet } setSepet={setSepet} product={product}/>))}
      </div>
    </div>
    </>
  );
}

export default App;
