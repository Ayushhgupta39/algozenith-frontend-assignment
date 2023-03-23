import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Box
      bgColor={"rgb(5,68,94);"}
      display={["flex", "", "grid", "grid"]}
      gridTemplateColumns={"50% 50%"}
      flexDirection={"column"}
      textColor={"white"}
    >
      <Box>
        <Box
          p={["", "", "4", "4"]}
          pb={["0", "", "0", "0"]}
          m={["4", "", "4", "4"]}
          mt={["8", "", "32", "32"]}
          mb={["", "", "0", "0"]}
          className="home-heading"
        >
          <Text fontSize={["3xl", "", "5xl", "5xl"]}>
            Be better at DSA & CP
          </Text>
        </Box>
        <Box
          p={["", "", "4", "4"]}
          m={["4", "", "4", "4"]}
          my={["", "", "0", "0"]}
        >
          <Text
            textAlign={["center", "center", "left", "left"]}
            fontSize={["sm", "sm", "", ""]}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
            dolorem. Deleniti odio optio nisi quibusdam ipsa
          </Text>
        </Box>
        <Flex
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column",
            "column",
          ]}
        >
          <Box
            m={["", "", "4", "4"]}
            p={["", "", "4", "4"]}
            my={["", "", "0", "0"]}
          >
            <Flex
              m={["2", "2", "4", "4"]}
              ml={["0", "0", "0", "0"]}
              flexDirection={["column", "column", "row", "row"]}
            >
              <Button
                color={"blue.800"}
                rightIcon={<ArrowForwardIcon />}
                colorScheme={"gray"}
                width={["-moz-max-content", "-moz-max-content", "", ""]}
                my={["2", "2", "0", "0"]}
                mr={["0", "0", "4", "4"]}
              >
                Join now
              </Button>
              <Button
                width={["-moz-max-content", "-moz-max-content", "", ""]}
                colorScheme={"messenger"}
                my={["", "", "0", "0"]}
              >
                View Curriculum
              </Button>
            </Flex>
          </Box>
          <Box
            m={["2", "2", "4", "4"]}
            p={["2", "2", "4", "4"]}
            my={["", "", "0", "0"]}
          >
            <SimpleGrid columns={2}>
              <Flex alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text fontSize={["sm", "sm", "", ""]}>
                    Lorem ipsum dolor sit amet
                  </Text>
                </Box>
              </Flex>
              <Flex alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text fontSize={["sm", "sm", "", ""]}>
                    Lorem ipsum dolor sit amet
                  </Text>
                </Box>
              </Flex>
            </SimpleGrid>
            <SimpleGrid mt={["2", "2", "2", "2"]} columns={2}>
              <Flex alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text fontSize={["sm", "sm", "", ""]}>
                    Lorem ipsum dolor sit amet
                  </Text>
                </Box>
              </Flex>
              <Flex alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </Box>
              </Flex>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Image src="/Group 316.png" />
      </Box>
    </Box>
  );
}
