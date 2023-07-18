import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"}>
      <form>
        <VStack
          alignItems={"stretch"}
          w={["full", "96"]}
          spacing={"8"}
          m={"auto"}
          my={"16"}
        >
          <Heading textAlign={"center"}>VIDEO HUB</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />
          <Input
            placeholder="Enter Name"
            type="text"
            focusBorderColor="purple.500"
            required
          />
          <Input
            placeholder="Enter Email"
            type="email"
            focusBorderColor="purple.500"
            required
          />

          <Input
            placeholder="Enter Password"
            type="password"
            focusBorderColor="purple.500"
            required
          />
          <Button type="submit" colorScheme="purple">
            Sign Up!
          </Button>

          <Text textAlign={"right"}>
            Already a user?{" "}
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/login"}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
