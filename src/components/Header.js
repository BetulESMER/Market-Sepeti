import React from 'react'

 function Header({total, inputText, setInputText}) {
    const inputTextHandler=(e)=>{
        
        setInputText(e.target.value)
        console.log(e.target.value)
        
        
        
        
    }
    const a={inputTextHandler}
  return (
    <div className="header">
        <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >ELZEM MARKET</h1>
        <div className="search">
         
                
            </div>
        
       <style >{`
       .header{
        height: 60px;
        justify-content: center;
        font-size: 24px;
        color: RosyBrown;
        align-items: center;
        font-size: 22px;
        letter-spacing: 1px;
       }
       `}
        </style> 
        

         
    </div>
  )
}
export default Header
