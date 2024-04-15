import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { RiArrowDropDownLine, RiCoinLine, RiCoupon2Fill, RiOrderPlayLine, RiProfileLine } from "react-icons/ri";
import { PiUserCircleLight } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import "./styles/dropdown.css";
import "./styles/threedot.css";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { GrOrderedList } from "react-icons/gr";
/**
 * @author
 * @function ThreeDot
 **/

export const LoginDropdown = (props) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<Box className="category">
			<Flex
			    gap={2}
				fontSize={"lg"}
				size={"lg"}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<PiUserCircleLight fontSize={"28"}/>
				<h3 style={{ fontSize: "18px", fontWeight: "500"}}>Login</h3>
				<RiArrowDropDownLine
					size={"35"}
					style={
						isHovered
							? { transform: "rotate(180deg) ", transitionDuration: "0.5s" }
							: { transform: "rotate(0deg)" }
					}
				/>
			</Flex>

			{isHovered && (
				<Box
					color={"black"}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className="dropdown-menu dropDownList"
					style={{ color: "black"}}
					width={"20%"}
					
					
					size={"lg"}
				>
					<p  style={{fontSize:"18px"}}>
					<PiUserCircleLight style={{ fontSize:"28px"}} /> My Profile
					</p>
					
					<p style={{fontSize:"18px"}}>
						{" "}
						<FaArrowTrendUp /> Flipkart Plus Zone
					</p>
					<p>
						{" "}
						<GrOrderedList />  Orders
					</p>
					<p style={{fontSize:"18px"}}>
						{" "}
						<IoHeartOutline  style={{ fontSize:"26px"}}/>  Wishlist
					</p>
					<p style={{fontSize:"18px"}}>
					<LiaGiftSolid style={{ fontSize: "23px" }} />Rewards
					</p>
					<p style={{fontSize:"18px"}}>
						<RiCustomerService2Fill /> Gift Cards
					</p>

				</Box>
			)}
		</Box	>
	);
};
