import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { Button } from '@chakra-ui/react'

/**
* @author
* @function Cart
**/

export const Cart = (props) => {
  return(
    <Button marginLeft="0px" backgroundColor={"white"}>
        <BsCart3 style={{ fontSize: "20px" }} />
        <h3 style={{ fontSize: "18px", marginLeft: "3px" }}>Cart</h3>
      </Button>
   )
  }
