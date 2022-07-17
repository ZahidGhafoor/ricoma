import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'

import logo from "../../assets/footer-logo.svg"

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';


import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./Footer.scss"

const Footer = () => {

    const [show , setShow] = useState(false)
    const [show1 , setShow1] = useState(false)
    const [show2 , setShow2] = useState(false)

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`10/01/${year}`) - +new Date();
      
        let timeLeft = {};
      
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
      
        return timeLeft;
      }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
// const [year] = useState(new Date().getFullYear());

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <div className='span'>
      {timeLeft[interval]} {interval}{" "}
    </div>
  );
});

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearTimeout(timer);
  });
    return (
        <>

        <div className="footer__container">
            <Container maxWidth="lg">
                <div className='footer__rows'>
                    
                        <div className="first__grid">
                            <img src={logo} alt="" className="glogo" />
                            <iframe      className='footer_video2' src="https://www.youtube.com/embed/orbkg5JH9C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={true}></iframe>
                            <div className="social_icons">
                                <FacebookIcon className='footer-icons' />
                                <TwitterIcon className='footer-icons' />
                                <InstagramIcon className='footer-icons' />
                                <YouTubeIcon className='footer-icons' />
                                <PinterestIcon className='footer-icons' />

                            </div>
                        </div>
                   
                  
                      <div className="snd__grid">
                        <ul>
                            <li>Massa.</li>
                            <li>Aliquet et.</li>
                            <li>Donec.</li>
                            <li>Neque nec feugiat.</li>

                        </ul>
                      </div>

                      <div className="none">
                        <div onClick={()=>{setShow(!show)}} className="show">
                            <div className="massa">Massa</div>
                            <div className="plus">{show ===false ?<AddIcon />:<RemoveIcon/> }</div>
                        </div>
                        {
                            show === true && <div className="hide">
                            <li>Aliquet et.</li>
                                <li>Donec.</li>
                                <li>Neque nec feugiat.</li>
                            </div>
                        }
                      </div>

                   
                
                    <div className="snd__grid">
                        <ul>
                            <li>Enim.</li>
                            <li>Lorem</li>
                            <li>Ipsum.</li>
                            <li>Donsec.</li>

                        </ul>
                      </div>
                      <div className="none">
                        <div onClick={()=>{setShow2(!show2)}} className="show">
                            <div className="massa">Enim</div>
                            <div className="plus">{show2 ===false ?<AddIcon />:<RemoveIcon/> }</div>
                        </div>
                        {
                            show2 === true && <div className="hide">
                         <li>Lorem</li>
                            <li>Ipsum.</li>
                            <li>Donsec.</li>
                            </div>
                        }
                      </div>

                
                    <div className="snd__grid">
                        <ul>
                            <li>Fusce.</li>
                            <li>Amet</li>
                            <li>Tincident.</li>
                            <li>Felis nec augue.</li>

                        </ul>
                      </div>
                      <div className="none">
                        <div onClick={()=>{setShow1(!show1)}} className="show">
                            <div className="massa">Gudvr</div>
                            <div className="plus">{show1 ===false ?<AddIcon />:<RemoveIcon/> }</div>
                        </div>
                        {
                            show1 === true && <div className="hide">
                         <li>Amet</li>
                            <li>Tincident.</li>
                            <li>Felis nec augue.</li>
                            </div>
                        }
                      </div>

                 
                

<iframe      className='footer_video' src="https://www.youtube.com/embed/orbkg5JH9C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={true}></iframe>

                 
                </div>

                <div className="footer__dummy">
                    <div className="dummy1">
                        <div className="hello">Neque dictum.</div>
                        <div className="hello">Pulvinar.</div>

                    </div>
                    <div className="dummy2">
                        <div className="hello">Elementum lectus suspendisse ipsum.</div>
                       

                    </div>
                </div>
            </Container>
        </div>

        <div className="bottom__line">
        <Container maxWidth="lg">
            <div className="bottm__text">
                <div className="btm__name">ZAHID GHAFOOR</div>
               
                <div className="time"> {timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
                <div className="btm__prof">Lorem Ipsum</div>


            </div>
        </Container>


        </div>
        </>
    )
}

export default Footer