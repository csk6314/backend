import React from 'react'
import {Carousel} from 'antd';
const ImageSlider = (props) => {
  return (
    <Carousel autoplay>
             {props.images.map((image,idx)=> (
                 <div key={image}>
                     <img style={{width:'100%', height:'200px', minHeight:'150px'}}
                     src={`http://localhost:5000/${image}`}/>
                 </div>
             ))}
    </Carousel>
  )
}

export default ImageSlider