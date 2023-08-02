import React from 'react'

import {
    Box, Grid, GridItem, Text
} from "@chakra-ui/react";

import { FaBookReader } from "react-icons/fa";

function SelectReaderIcon() {
    return (
        <Box py={7} px={12} marginTop={2}>

            <Text fontSize={'21'} color={'#204974'} as={'b'} >
                Current Subscription
            </Text>

            <Grid templateColumns="auto 1fr" gap={4} paddingTop={3}>
                {/* First column with icon */}
                <GridItem marginTop={3}>
                    {/* Add your desired icon from the react-icons library */}
                    <FaBookReader size={50} color='darkblue' />
                </GridItem>

                {/* Second column (spanning two rows) */}
                <GridItem textAlign={"start"}>
                    {/* First row in the second column */}
                    <Text fontWeight="500" fontSize="20">
                        BOOK
                    </Text>

                    {/* Second row in the second column */}
                    <Text fontSize="3xl" fontWeight="900">
                        Reader
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default SelectReaderIcon