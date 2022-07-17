import { Container } from '@mui/system'
import React from 'react'
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import "react-multi-carousel/lib/styles.css";
import machine from "../../assets/machine.svg"
import RatingCard from '../../components/atoms/RatingCard/RatingCard';
import "./Cards.scss"

import card1 from "../../assets/card3.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card4.png"
// import card1 from "../../assets/card3.png"

import Button from '../../components/atoms/Button/Button';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    //   slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    //   slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    //   slidesToSlide: 1 // optional, default to 1.
    }
  };


const Cards = () => {
    return (
        <div className="cards__container">
            <Container maxWidth="lg">
                <div className="card__heading">
                    Pellentesque tortor aliquet arcu nunc.
                </div>

                <div className="cards">
                    <div className="c1">
                        <div className="card1__heading">
                            Lorem ipsum dolor sit amet, consectetur
                        </div>
                        <div className="slider">
                            <Carousel responsive={responsive}>
                                <div className="car__img">
                                    <img src={machine} alt="" className="machine" />
                                    <div className="m__name">TR-7410</div>
                                    <div className="m__para">65 NEEDLES</div>
                                </div>

                            </Carousel>
                        </div>
                        <div className="rating__cards">
                            <div style={{ marginBottom: "32px" }}><RatingCard fb="fb" pimg={card1} heading="Viverra." para="Sem scelerisque sit viverra." quote="quote" value="3" /></div>
                            <div><RatingCard fb="fb" pimg={card2} heading="Ac poteniti." para="Justo fames orci enim ornare quis lectus odio.." quote="quote" value="4" /></div>


                        </div>
                        <div className="lorem__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur auctor malesuada hendrerit nec, porttitor nunc tristique. Egestas eget fermentum at eget nunc et nisi eu lorem.</div>

                        <div className="card__btn">
                            <Button text="DOLOR." />

                        </div>

                    </div>
                    <div className="c1">
                        <div className="card1__heading">
                            Lorem ipsum dolor sit amet, consectetur
                        </div>
                        <div className="slider">
                            <Carousel
                                // ssr
                                // partialVisbile
                                //   slidesToSlide={1}
                                itemClass="image-item"
                                responsive={responsive}
                                //   infinite={true}
                                // autoPlay={true}
                                // utoPlaySpeed={1000}
                            >
                                <div className="car__img">
                                    <img src={machine} alt="" className="machine" />
                                    <div className="m__name">TR-7410</div>
                                    <div className="m__para">65 NEEDLES</div>
                                </div>
                                <div className="car__img">
                                    <img src={machine} alt="" className="machine" />
                                    <div className="m__name">HG-8520</div>
                                    <div className="m__para">43 NEEDLES</div>
                                </div>
                                <div className="car__img">
                                    <img src={machine} alt="" className="machine" />
                                    <div className="m__name">RE-2568</div>
                                    <div className="m__para">98 NEEDLES</div>
                                </div>
                                <div className="car__img">
                                    <img src={machine} alt="" className="machine" />
                                    <div className="m__name">TY-5656</div>
                                    <div className="m__para">09 NEEDLES</div>
                                </div>
                                <div className="car__img">
                                    <img src={machine} alt="" className="machine" />
                                    <div className="m__name">UY-9510</div>
                                    <div className="m__para">78 NEEDLES</div>
                                </div>
                            </Carousel>
                        </div>
                        <div className="rating__cards">
                            <div style={{ marginBottom: "32px" }}><RatingCard fb="fb" pimg={card3} heading="Sed faucibus.." para="Consectetur porttitor nunc id nunc quis.." quote="quote" value="2" /></div>
                            <div><RatingCard fb="fb" pimg={card1} heading="Vitae tortor." para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus eget morbi sit amet.." quote="quote" value="5" /></div>


                        </div>
                        <div className="lorem__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur auctor malesuada hendrerit nec, porttitor nunc tristique. Egestas eget fermentum at eget nunc et dsfds sdfsd nisi eu lorem.</div>
                        <div className="card__btn">
                            <Button text="CURSUS." />

                        </div>
                    </div>

                </div>
            </Container>
        </div>

    )
}

export default Cards



