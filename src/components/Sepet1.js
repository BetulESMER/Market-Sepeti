import {useState} from 'react'
import SepetItem from './SepetItem'

 function Sepet1({sepet, products, total}) {
  
  return (
    
      <>
        <h3 style={{color:"IndianRed", fontSize:"20px", }}>Sepettekiler</h3>
        <ul><li>{sepet.map(item =>
        (<li>
        <SepetItem item={item} product={products.find(product=>product.id===item.id)}/></li>))}</li></ul>
        <div>
            Sepet Tutarınız : {total}TL
        </div>
</>

   
  )
}

export default Sepet1
