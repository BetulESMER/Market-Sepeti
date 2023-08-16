import React from 'react'

 function Product({product, total, sepet, setSepet}) {
    const sepetItem =sepet.find(item=> item.id ===product.id)
    const add=()=>{
        const SepetKontrol = sepet.find(item=>item.id===product.id)
        if(SepetKontrol){
          SepetKontrol.amount += 1
          setSepet([...sepet.filter(item=>item.id !== product.id) , SepetKontrol])
        }else{
            setSepet([...sepet,{
                id: product.id, 
                amount:1
            }])
        }
    }
    const remove = () =>{
        const SepetKontrol = sepet.find(item=>item.id===product.id)
        const currentSepet= sepet.find(item=> item.id===product.id)
          SepetKontrol.amount -= 1
          if(SepetKontrol.amount===0){
            setSepet([...sepet.filter(item=>item.id !== product.id)])
          }else{

          setSepet([...sepet.filter(item=>item.id !== product.id) , currentSepet])
          }
        }
    
  return (
    <div classNAme="product">
      <img src={product.image} alt=""/>
        <h4 style={{color:"Black	", fontsize : "40px", margin_bottom : "30px"}}>{product.isim}</h4>
        
        <div className="fiyat">{product.fiyat}TL</div>
        <div className="actions">
            <button onClick={add}>Sepete Ekle</button>
            <button disabled={!sepetItem} onClick={remove}>Sepetten Çıkar</button>
            <span className="amount">{sepetItem && sepetItem.amount || 0} adet</span>
        </div>
        
        <style >
{`
  .product {
    padding: 15px;
    
    border: 1px solid #ddd;
    margin-bottom: 20px;
    width: 50%;
    
  }
  .product img {
    width: 40%; 

  }
  .product .fiyat{
    font-size : 20px;
    color: #179b17;
  }
  .product .actions{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .actions button{
    height: 40px;
    padding: 0 15px;
    flex:1;
    cursor: pointer;
  }
  `}
</style>


    </div>
  )
}
export default Product
