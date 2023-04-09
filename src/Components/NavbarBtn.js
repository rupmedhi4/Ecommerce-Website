import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import PopUpCart from './PopUpCart'

export default function NavbarBtn(props) {
    const [showCart, setShowCart] = useState(false);
    const handleCartClick = () => {
         setShowCart(true);
        //console.log("btn clicl");
      };

  return (
    <div>
      <Button 
             variant="outline-light" 
             style={{ fontSize: '1.2rem', border: '2px solid white'}}
         onClick={handleCartClick}
      > 
            Card 0
      </Button>
      {showCart && <PopUpCart/>}
    </div>
  );
}
