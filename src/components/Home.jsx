import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Box
      bgColor={"rgb(5,68,94);"}
      display={["flex", "", "grid", "grid"]}
      gridTemplateColumns={"50% 50%"}
      flexDirection={"column"}
    >
      <Box>
        <Box className="home-heading" textColor={"white"}>
          <Text fontSize={"5xl"}>Be better at DSA & CP</Text>
        </Box>
      </Box>
      <Box>
        <Image src="/Group 316.png" />
      </Box>
    </Box>
  );
}
