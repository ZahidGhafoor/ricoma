import React, { useState } from 'react'
import Container from '@mui/material/Container';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../../assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';

import "./NavBar.scss"
import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

import drawer from "../../../assets/dlogo.svg"
import home from "../../../assets/dhome.svg"
import product from "../../../assets/products.svg"
import about from "../../../assets/about.svg"






const NavBar = () => {
  const [state, setState] = useState({
    right: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
     
   <div className="drawer">
   <div className="drawer__header">
      <img src={drawer} className="drawer__icon"></img>
      <CloseIcon onClick={toggleDrawer(anchor, false)} className="cross"/>
    </div>
    <div className="tabs">
    <div className="tab1">
        <img src={about} alt="" className="home__img" />
        <div className="dtext">Home</div>
      </div>
      <div className="tab1">
        <img src={product} alt="" className="home__img" />
        <div className="dtext">Products</div>
      </div>
      <div className="tab1">
        <img src={about} alt="" className="home__img" />
        <div className="dtext">About</div>
      </div>
    </div>
   </div>
      
    </Box>
  );
  return (
    <>
     <div className="navbar__container">
    <Container maxWidth="lg">
     <div className="nav__data">
      <img src={logo} alt="" className="log" />
      <div className="tabs">
        <div className="text">HOME</div>
        <div className="text">PRODUCTS</div>
        <div className="text">ABOUT</div>

      </div>
      <div className="ham">
      <div className="cart">
        <ShoppingCartIcon className='cart__icon'/>
        <div className="number">2</div>
      </div>
      <div className="cart burger">
      <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
                  <MenuIcon onClick={toggleDrawer(anchor, true)} className='burger__icon'/>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>

     
      </div>
      </div>
     </div>
  </Container>
     </div>



     </>
  )
}

export default NavBar