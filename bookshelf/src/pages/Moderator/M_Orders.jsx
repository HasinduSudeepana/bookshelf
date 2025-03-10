import { React, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Icon,
  Spacer,
  Text,
  StatGroup,
  Select,
} from "@chakra-ui/react";
import { BiBookOpen } from "react-icons/bi";
import StatCard from "../../components/Moderator/StatCard";
import DataTable from "../../components/Moderator/DataTable";
import SearchPanel from "../../components/Moderator/SearchPanel";

export default function Orders() {
  const columns = [
    "Order ID",
    "Customer ID",
    "Order date",
    "Order type",
    "Total price",
  ];

  const [list, setOrderList] = useState([]);

  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/orders");
      const jsonData = await response.json();

      const filteredData = jsonData.map((order) => ({
        id: order.id,
        buyerId: order.buyer_id,
        orderDate: order.orderDate,
        orderType: order.orderType,
        totalPrice: order.totalPrice,
        status: order.orderStatus,
      }));

      setOrderList(filteredData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // const [count, setCount] = useState(0);
  // const getCount = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/v1/orders/count")
  //     const jsonData = await response.json()
  //     setCount(jsonData[0].count);

  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Box p={10}>
        <Flex>
          <Text fontSize="lg" fontWeight={"bold"}>
            Order Summory
          </Text>
        </Flex>

        <Flex gap={20}>
          <Card
            mt={5}
            p={5}
            pl={10}
            pr={10}
            boxShadow="sm"
            borderRadius="md"
            bgColor={"#EDF2F7"}
            w={"fit-content"}
          >
            <CardBody>
              <Flex justifyContent={"space-between"}>
                <Icon as={BiBookOpen} boxSize={8} color={"#3182CE"} />
                <Select width={"100px"}>
                  <option value="option1">All</option>
                  <option value="option2">This week</option>
                  <option value="option2">This Month</option>
                </Select>
              </Flex>
              <StatGroup gap={100}>
                <StatCard lable="All Orders" value={"100"} />
                <StatCard
                  lable="Pending"
                  value="20"
                  type="increase"
                  percentage="80"
                />
                <StatCard
                  lable="Completed"
                  value="70"
                  type="increase"
                  percentage="80"
                />
                <StatCard
                  color={"red"}
                  lable="Canceled"
                  value="0"
                  type="increase"
                  percentage="80"
                />
              </StatGroup>
            </CardBody>
          </Card>
        </Flex>

        <Spacer mt={10} />

        <Box>
          <SearchPanel name={"Customer Orders"} filter={"orders"} />

          <Spacer mt={5} />

          <DataTable list={list} columnNames={columns} />
        </Box>
      </Box>
    </>
  );
}
