import { Box, Image, Heading, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxWidth={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          borderBottom={"2px solid"}
          w={"fit-content"}
          m={"auto"}
        >
          Services
        </Heading>

        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"justify"}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            corporis ratione ipsa sapiente eligendi est, beatae blanditiis quia
            placeat enim, amet ex sed? Nostrum, quae! Perspiciatis harum a enim
            recusandae similique quo vel ipsum numquam repudiandae cupiditate
            esse rem sequi consectetur in aperiam pariatur eum rerum minima
            sunt, eveniet porro accusamus. Quae accusantium quasi dolorem
            eligendi obcaecati id, vero dolore error pariatur magnam, laudantium
            possimus aspernatur tempore at dignissimos voluptas vel quo adipisci
            quod. Accusamus deserunt eveniet voluptas doloremque, aperiam maxime
            aliquam ut ullam quis aspernatur soluta officiis debitis deleniti
            laborum vero laboriosam aut voluptatem optio harum rerum, et,
            tempora cupiditate. Qui rerum itaque temporibus atque earum
            accusamus, cupiditate explicabo voluptas eos. Asperiores rem unde
            molestiae fuga saepe sunt nulla.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={"full"} h={"100vh"}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.500"} color={"white"} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img2} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Future Is Gaming
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img3} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img4} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Night Life Is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
