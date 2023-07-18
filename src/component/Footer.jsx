import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import {
  AiOutlineSend,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      minH={"40"}
      p={"16"}
      textAlign={"center"}
      color={"white"}
    >
      <Stack direction={["column", "row"]}>
        <VStack w={"full"}>
          <Heading textTransform={"uppercase"} size={"md"}>
            Subscribe to our Newsletter
          </Heading>
          <HStack py={"2"} borderBottom={"2px solid white"} w={"fit-content"}>
            <Input
              placeholder="Enter Email Here...."
              border={"none"}
              borderRadius={"15px"}
              outline={"none"}
              focusBorderColor={"purple"}
            />
            <Button
              variant={"ghost"}
              p={"2"}
              borderRadius={"0 20px 20px 0"}
              colorScheme="purple"
            >
              <AiOutlineSend size={"md"} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading textTransform={"uppercase"} textAlign={"center"}>
            Video HUB
          </Heading>
          <Text>All rights reserved </Text>
        </VStack>
        <VStack w={"full"}>
          <Heading textTransform={"uppercase"} size={"md"}>
            Social Media
          </Heading>
          <HStack justifyContent={"space-evenly"} marginTop={"20px"}>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
              <a href="https://github.com/tiwariParth" target="_blank">
                <AiOutlineGithub color="white" size={"35"} />
              </a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
              <a
                href="https://www.instagram.com/parthtiwari6165"
                target="_blank"
              >
                <AiOutlineInstagram color="white" size={"35"} />
              </a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
              <a href="https://twitter.com/Tiwariparth6165" target="_blank">
                <AiOutlineTwitter color="white" size={"35"} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
