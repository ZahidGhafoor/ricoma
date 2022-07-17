import { Rating } from '@mui/material'
import React, { useState } from 'react'
import card1 from "../../../assets/card2.png"
import "./RatingCard.scss"

import img1 from "../../../assets/img1.png"
import quot from "../../../assets/quote.svg"


const RatingCard = ({ heading, para, pimg, fb, quote,value,color }) => {

    console.log("props are =",heading,para, pimg,fb,quote );
    // const [value, setValue] = useState(5)
    return (
    
    <div className= {color ?"rcard__container": "color "}> 
           
{pimg && <img src={pimg} alt="" className="left__img" />}  
          <div className="right__text">
                <div className="rcard__heading">{heading}</div>
                <div className="para">{para}</div>
                <div className="rating">
                    <Rating name="read-only" value={value} readOnly />
                </div>
            </div>
           
            {fb&&  <img src={img1} alt="" className="fb__icon" />}
            {quote &&<img src={quot} alt="" className="quote__icon" />}
        </div>
    )
}

export default RatingCard