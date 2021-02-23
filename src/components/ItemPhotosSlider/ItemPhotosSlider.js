import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './carousel-customize.css'
import {Carousel} from 'react-responsive-carousel'
import {itemPhoto} from 'assets'

import {ItemName} from './style'

const ItemPhotosSlider = (props) => {
  return (
    <>
      <Carousel>
        <div>
          <img src={itemPhoto} alt=""/>
        </div>
        <div>
          <img src={itemPhoto} alt=""/>
        </div>
        <div>
          <img src={itemPhoto} alt=""/>
        </div>
      </Carousel>
      <ItemName>Macbook Pro</ItemName>
    </>
  )
}

export default ItemPhotosSlider