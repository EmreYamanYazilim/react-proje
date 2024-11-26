import React from 'react'

function Certificates({ cer, deneme }) {
  const { id, title, description, image } = cer;
  const deneme = true;

  return (

    <div className='certificates'>
      <img className='images' src={image}></img>
      <h4 className='title-certifica'>{title}</h4>
      <h5 className='description'>{description}</h5>
      <h2>{deneme ? "Evet" : "Hayır"}</h2>
      <h2>{deneme && "Evet"}</h2>
    </div>
  )

  //todo  Notlar
  //! serfikalarımımı yaparken diğer porje ile birleştirmek istiyorum 
  //? 2 react eğitimi bitti ve projeler bazlı çalışacağım
}

export default Certificates