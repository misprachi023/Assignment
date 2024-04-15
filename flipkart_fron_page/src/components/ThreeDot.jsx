import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { CgSoftwareDownload } from "react-icons/cg";
import "./styles/dropdown.css";
import "./styles/threedot.css";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from '@chakra-ui/react'
/**
 * @author
 * @function ThreeDot
 **/

export const ThreeDot = (props) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	}

	const handleMouseLeave = () => {
		setIsHovered(false);
	}
	return (
		<Box className ="category">
			<Flex size={"lg"}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><BsThreeDotsVertical /></Flex>
			
				{isHovered && <Box color={"black"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="dropdown-menu dropDownList" style={{color:"black"}} width={"20%"}   size={"lg"}>
					<p><IoIosNotificationsOutline style={{fontSize:"30px"}}/> Notification Preference</p>
					<p><RiCustomerService2Fill/> 24x7 Customer Care</p>
					<p> <FaArrowTrendUp/> Advertize</p>
					<p> <CgSoftwareDownload/> Download App</p>



				</Box>
				}
			
		</Box>
	);
};
