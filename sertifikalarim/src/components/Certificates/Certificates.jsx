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
// Notlar
// serfikalarımımı yaparken diğer porje ile birleştirmek istiyorum 
// 2 react eğitimi bitti ve projeler bazlı çalışacağım
}

export default Certificates