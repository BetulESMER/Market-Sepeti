import React from 'react'

 function SepetItem({item, product}) {
  return (
    <div>
        {product.isim}x{item.amount}
        </div>
  )
}
export default SepetItem
