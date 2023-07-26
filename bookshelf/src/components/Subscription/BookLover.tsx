import React from "react";

import {
	Box,
	Text,
	VStack,
	useColorModeValue,
	List,
	ListItem,
	ListIcon,
	Button,
	Grid,
	GridItem,
} from "@chakra-ui/react";

import { FaCheckCircle } from "react-icons/fa";
import { PiHandHeartFill } from "react-icons/pi"; 
import { Link as RouterLink } from "react-router-dom";
interface Props {
	children: React.ReactNode;
}

function PriceWrapper(props: Props) {
	const { children } = props;

	return (
		<Box
			mb={4}
			shadow="base"
			borderWidth="1px"
			alignSelf={{ base: "center", lg: "flex-start" }}
			borderColor={useColorModeValue("gray.200", "gray.500")}
			borderRadius={"xl"}
		>
			{children}
		</Box>
	);
}

function BookReder() {
	return (
		<div>
			<PriceWrapper>
				<Box position="relative" boxSize={430}>
					<Box
						position="absolute"
						top="-16px"
						left="80%"
						style={{ transform: "translate(-50%)" }}
					>
						<Text
							textTransform="uppercase"
							bg={useColorModeValue("red.300", "red.700")}
							px={3}
							py={1}
							color={useColorModeValue("gray.900", "gray.300")}
							fontSize="xl"
							fontWeight="600"
							rounded="xl"
						>
							Popular
						</Text>
					</Box>
					<Box py={7} px={12}>
						<Grid templateColumns="auto 1fr" gap={4}>
							{/* First column with icon */}
							<GridItem marginTop={6}>
								{/* Add your desired icon from the react-icons library */}
								<PiHandHeartFill size={50} />
							</GridItem>

							{/* Second column (spanning two rows) */}
							<GridItem textAlign={"start"}>
								{/* First row in the second column */}
								<Text fontWeight="500" fontSize="3xl">
									BOOK
								</Text>

								{/* Second row in the second column */}
								<Text fontSize="4xl" fontWeight="900">
									Lover
								</Text>
							</GridItem>
						</Grid>
					</Box>
					<VStack
						bg={useColorModeValue("gray.50", "gray.700")}
						py={4}
						borderBottomRadius={"xl"}
					>
						<List spacing={"14"} textAlign="start" px={12}>
							<ListItem fontSize={18}>
								<ListIcon
									as={FaCheckCircle}
									color="green.500"
								/>
								<strong>1 book every for one month</strong>
							</ListItem>
							<ListItem>
								<ListIcon
									as={FaCheckCircle}
									color="green.500"
								/>
								Time extensions.
							</ListItem>
							<ListItem>
								<ListIcon
									as={FaCheckCircle}
									color="green.500"
								/>
								Money Back Gurantee.
							</ListItem>
						</List>
						<Box w="80%" pt={7}>
							<RouterLink to="/selectBookLover">
								<Button
									ml={5}
									colorScheme="purple"
									w={130}
									borderRadius={100}
								>
									Select
								</Button>
							</RouterLink>
						</Box>
					</VStack>
				</Box>
			</PriceWrapper>
		</div>
	);
}

export default BookReder;
