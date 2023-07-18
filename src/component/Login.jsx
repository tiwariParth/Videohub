import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
          <Heading>Welcome Back</Heading>
          <Input
            placeholder="Enter Username"
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

          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"}>Forget Password?</Link>
          </Button>

          <Button type="submit" colorScheme="purple">
            Log In
          </Button>

          <Text textAlign={"right"}>
            New user?{" "}
            <Button variant={"link"} colorScheme="purple">
              <Link to={"/signup"}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
