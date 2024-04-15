import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Input, Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
/**
 * @author
 * @function SearchBar
 **/

export const SearchBar = (props) => {
	return (
		<Flex position={"relative"} width={"35%"}>
			<Box position={"absolute"} top={2} left={2}>
				<IoSearchOutline color={"gray"} size={28} />
			</Box>
			<Input
                paddingLeft={"10%"}
				size={"md"}
				width={"100%"}
				type="text"
				placeholder="Search for products, brands and more"
			/>
		</Flex>
	);
};
