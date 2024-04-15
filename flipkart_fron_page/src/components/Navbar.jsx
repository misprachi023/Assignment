import React from 'react'
import { LoginDropdown } from './LoginDropdown'
import { Cart } from './Cart'
import { Seller } from './Seller'
import { ThreeDot } from './ThreeDot'
import { Flex, Box } from '@chakra-ui/react'
import { SearchBar } from './SearchBar'


/**
* @author
* @function Navbar
**/

export const Navbar = () => {
  return(
    <Flex color={"black"} p={2} justifyContent={"space-between"} alignItems={"center"}>
        <Box>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
    
        </Box>
        <SearchBar/>
        <LoginDropdown/>
        <Cart/>
        <Seller/>
        <ThreeDot/>
    </Flex>
   )
  }
