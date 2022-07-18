import { Container } from '@mui/system'
import React from 'react'
import "./Header.css"
// import main from "../../../assets/main.png"

import video from "../../../assets/video.png"

import blue from "../../../assets/blue_card.svg"
import orange from "../../../assets/orange_card-cropped.svg"
import white from "../../../assets/white_card.svg"
import logos from "../../../assets/A_plus.svg"
import Button from '../../../components/atoms/Button/Button'
import RatingCard from '../../../components/atoms/RatingCard/RatingCard'
import { Euro } from '@mui/icons-material'

import call from "../../../assets/callicon.svg"
import ok from "../../../assets/ok.svg"

import home from "../../../assets/home.svg"




const Header = () => {
    return (
        <div className="header__container">

            <Container maxWidth="lg">

                <div className="header__data">
                    <div className="left__info">
                        <div className="heading">
                            Dui Augue Lectus In Ut At Lorem
                        </div>
                        <div className="para1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor risus commodo. Tempus molestie morbi ultrices nunc. <span>Semper nam ridiculus duis bibendum risus, arcu arcu.</span>
                        </div>
                        <div className="para1">
                            Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem condimentum posuere cursus quis risus. Mauris, auctor ridiculus blandit lacus. <span>Porttitor diam a amet pharetra tellus, senectus augue. Id sed a quis morbi ac odio cursus metus sit. Sapien ut non eu non egestas non mauris. </span> Elit, scelerisque mauris aenean justo.
                        </div>
        <iframe className='video__card' src="https://www.youtube.com/embed/orbkg5JH9C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={true}></iframe>
                    </div>
                    
                    <div className="right__form">
                    <div className="headingg">
                            Dui Augue Lectus In Ut At Lorem
                        </div>
                        <div className="top_cards">
                            <img src={blue} alt="" className="card1" />
                            <img src={white} alt="" className="card2" />
                            <img src={orange} alt="" className="card3" />

                        </div>

                        <div className="mobile__form__care">
                        <img src={white} alt="" className="card4" />
                            <img src={blue} alt="" className="card5" />
                            <img src={orange} alt="" className="card6" />

                        </div>
                        <div className="form__card">
                            <div className="upper">
                                <div className="bottom">
                                    <div className="form__heading">Dictumst dui egestas.</div>
                                    <div className="form__heading2">Fill out the form to ssecure the best deal!</div>
                                    <div className="fname">
                                        <div className="name">
                                            <label className='lebel' for="your-name">First Name</label> <br />
                                            <input placeholder='First name' className="input" name="your-name" type="text" />

                                        </div>
                                        <div className="name">
                                            <label className='lebel'  for="your-name">Last Name</label> <br />
                                            <input placeholder='Last name' className="input" name="your-name" type="text" />

                                        </div>
                                        
                                    </div>
                                    <div className="fname">
                                        <div className="name">
                                            <label className='lebel' for="your-name">Email Adress</label> <br />
                                            <input placeholder='Email Adress<' className="input" name="your-name" type="text" />

                                        </div>
                                        <div className="name">
                                            <label className='lebel'  for="your-name">Phone Number</label> <br />
                                            <input placeholder='Phone number' className="input" name="your-name" type="text" />

                                        </div>
                                    </div>
                                    <div className="fname">
                                        <div className="namee">
                                            <label className='lebel' for="your-name">Coutry</label> <br />
                                            <input placeholder='Country' className="inputt" name="your-name" type="text" />

                                        </div>
                                        
                                    </div>

                                    <div className="hello">
                                    <Button text="Et nibh lacus elit."/>
                                    </div>
                                   

                                    <div className="logos" >

                                    <img src={logos} alt="" />
                                    </div>
                                   <div className="ratingg">
                                   <RatingCard heading = "Sit eu." para ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta venenatis, lobortis proin justo, in vel elementum. Convallis." quote ="quote" value="5" color="color"/>
                                   </div>

                                    <div className="bottom__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus, faucibus sit viverra cras aliquam parturient. Interdum amet imperdiet sit feugiat donec. Proin.
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>

                <div className="dummuy__info">
                    <div className="info1">
                        <div className="img_div">
                        <img className="info_icon" src={call}></img>
                        </div>
                       <div className="info__right">
                       <div className="info__heading">24/7</div>
                       <div className="info__para">LOREM INSUM</div>
                       </div>
                    </div>
                    <div className="info1">
                        <div className="img_div">
                        <img className="info_icon" src={home}></img>
                        </div>
                       <div className="info__right">
                       <div className="info__heading">30+</div>
                       <div className="info__para">LOREM INSUM</div>
                       </div>
                    </div>
                    <div className="info1">
                        <div className="img_div">
                        <img className="info_icon" src={ok}></img>
                        </div>
                       <div className="info__right">
                       <div className="info__heading">50+</div>
                       <div className="info__para">LOREM INSUM</div>
                       </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Header