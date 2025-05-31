import React from 'react'

const WomanCollect = (props) => {
    const{title,image2,image3,image5,image6,image7,image8} = props.ladiesFashion
  return (
    <div className='collectSection'>
        <h2>{title}</h2>
        <div className="bannerbox">
        <img src="all images/imgs/asserts/LadiesBanner.gif" alt="banner"/>
        </div>
    
       <div className="womanImages">
    
          <img src={image2} alt={title}/>
          <img src={image3} alt={title}/>
          <img src={image5} alt={title}/>
          <img src={image6} alt={title}/>
          <img src={image7} alt={title}/>
          <img src={image8} alt={title}/>
        </div>
    </div>
  )
}

export default WomanCollect
