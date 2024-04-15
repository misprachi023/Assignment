import React from 'react'
import { LiaGiftSolid } from "react-icons/lia";
import { Button } from '@chakra-ui/react'
/**
* @author
* @function Seller
**/

export const Seller = (props) => {
  return(
    <Button backgroundColor={"white"}>
    <LiaGiftSolid style={{ fontSize: "23px" }} />
    <h3 style={{ fontSize: "18px" , marginLeft: "3px"}}>Become a Seller</h3>
  </Button>
   )
  }
