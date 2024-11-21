import React from 'react'

function Certificates({cer}) {
const { id, title, description,image} = cer;    

console.log(cer);

  return (
    
    <div className='certificates'>
        <img className='images' src={image}></img>
        <h4  className='title-certifica'>{title}</h4>
        <h5 className='description'>{description}</h5> 
    </div>

  


  )
}

export default Certificates