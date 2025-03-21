import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

function ManageRequest() {
  const { user, setUser } = useContext(userContext);

  const [requestDetails, setRequestDetails] = useState({});
  const [userEmail, setUserEmail] = useState(""); // State to store user email

  useEffect(() => {
    const getRequestDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/bookSharing/requests`
        );
        console.log(response.data);
        setRequestDetails(response.data);
        console.log(requestDetails);

        // Set the user email to the state
        setUserEmail(user.email);
        console.log(setUserEmail);    
      } catch (error) {
        console.log(error);
      }
    };
    getRequestDetails();
  }, [user]); // Include user in dependency array

  return (
    <TableContainer
      bg={"white"}
      border={"1px"}
      borderColor={"blue.200"}
      borderRadius={10}
      padding={10}
    >
      <Table size="lg">
        <Thead>
          <Tr>
            <Th align="center">Book</Th>
            <Th align="center">Details</Th>
            <Th> </Th>
            <Th> </Th>
            <Th align="center">Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(requestDetails).map((item) => (
            <Tr key={item}>
              <Td>{requestDetails[item].bookName}</Td>
              <Td>{requestDetails[item].details}</Td>

              <Td colSpan={2} align="center">
                <Button
                  colorScheme="purple"
                  variant={"outline"}
                  borderRadius={15}
                >
                  Edit
                </Button>
                <Button
                  marginLeft={"5"}
                  colorScheme="red"
                  variant={"outline"}
                  borderRadius={15}
                >
                  Delete
                </Button>
              </Td>
              <Td>lasinduwathsan@gmail.com</Td> {/* Display user email */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ManageRequest;
