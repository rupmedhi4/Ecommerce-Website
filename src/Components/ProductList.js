import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Cart from './Cart';

export default function ProductList() {
  const productsArr = [
    {
      id:"1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {id:"2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {id:"3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    { id:"4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    { id:"5",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    { id:"6",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    }
  ]

  

  return (
    
    <ListGroup className="lg mx-1 mt-5">
  {productsArr.map((item, index) => {
    if (index % 2 === 0) {
      return (
        // Create a new row every two items
        <div key={item.id} className="d-flex justify-content-center my-3">
          <Cart  
            title={item.title} 
            price={item.price} 
            url={item.imageUrl} 
          />
          
          {index + 1 <= productsArr.length && (
            <Cart
              key={productsArr[index + 1].id}
              title={productsArr[index + 1].title}
              price={productsArr[index + 1].price}
              url={productsArr[index + 1].imageUrl}
              className="d-flex justify-content-center my-3"
            />
            
          )}
         
        </div>
      );
    }
  })}
</ListGroup>

  );
}
