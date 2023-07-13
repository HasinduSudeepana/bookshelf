import React from "react";
import BlurWhiteBox from "../components/Home/BlurWhiteBox";
import HomeItemBox from "../components/Home/HomeItemBox";
import { Flex, Heading} from "@chakra-ui/react";
import bookgirl from "../assets/bookgirl.png";
import { FaBookOpen, FaFire, FaHeart } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { ImBooks } from "react-icons/im";


function Home() {
  const itemBoxDetails = {
    bestSellers: {
      header: "Best Sellers",
      bgColor: "#F9EFFF",
      icon: <FaFire size={25} color="#9747FF" />,
    },
    selfHelp: {
      header: "Self Help",
      bgColor: "#FCF3E9",
      icon: <FaBookOpen size={25} color="#FFA749" />,
    },
    romance: {
      header: "Romance",
      bgColor: "#F4E2E1",
      icon: <FaHeart size={25} color="#FA605B" />,
    },
    fiction: {
      header: "Fiction",
      bgColor: "#E2F0F2",
      icon: <BsStars size={25} color="#05CBEA" />,
    },
    collections: {
      header: "Collections",
      bgColor: "#FFF5F6",
      icon: <ImBooks size={25} color="#FF9798" />,
    },
  };
  return (
    <>
      <BlurWhiteBox
        title="Find Your Next Literary Escape Browse, Click, and Get Lost in Stories!"
        image={bookgirl}
      />
      <Heading
        fontFamily={"Montserrat"}
        size={"sm"}
        position={"relative"}
        top={10}
        left={{ base: 100, sm: 40 }}
        w={"200px"}
      >
        Featured Categories
      </Heading>
      <Flex
        gap={10}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
        mt={20}
        flexWrap={"wrap"}
      >
        {Object.keys(itemBoxDetails).map((item) => (
          <HomeItemBox
            header={itemBoxDetails[item].header}
            bgColor={itemBoxDetails[item].bgColor}
            icon={itemBoxDetails[item].icon}
          />
        ))}
      </Flex>
    </>
  );
}

export default Home;
