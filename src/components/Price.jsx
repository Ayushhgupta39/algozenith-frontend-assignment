import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function Price() {
  return (
    <Box
      display={["flex", "flex", "grid", "grid"]}
      gridTemplateColumns={"50% 50%"}
      flexDirection={"column"}
    >
      <Box m={["4", "4", "4", "4"]} my={["4", "4", "20", "20"]}>
        <Box>
          <Text
            px={["4", "4", "8", "8"]}
            fontWeight={"extrabold"}
            fontSize={["3xl", "3xl", "5xl", "5xl"]}
            textAlign={["center", "center", "", ""]}
          >
            Invest in skills,
          </Text>
          <Flex textAlign={["center", "center", "", ""]}>
            <Text
              pl={["4", "4", "8", "8"]}
              mr={"1"}
              fontWeight={"extrabold"}
              fontSize={["3xl", "3xl", "5xl", "5xl"]}
            >
              earn 10x of what you paid.
            </Text>
          </Flex>
          <Box textAlign={["center", "center", "", ""]} m={["4", "4", "4", "4"]} p={["2", "2", "4", "4"]}>
            <Text fontSize={["sm", "sm", "", ""]}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
              neque culpa aut, adipisci fugit corporis nostrum ex a
              reprehenderit, laudantium ipsam atque impedit! Eaque aliquid
              officiis beatae iste tempore cum?
            </Text>
          </Box>
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
                bgColor={"gray.200"}
                border={"1px"}
                borderColor={"white"}
                boxSize={["8", "8", "10", "10"]}
              ></Box>
              <Box m={["2", "2", "2", "2"]}>
                <Text as={"b"} fontSize={["small", "small", "md", "md"]}>
                  1.2 Cr/Year
                </Text>
                <Text fontSize={["xs", "xs", "", ""]}>highest fresher package</Text>
              </Box>
            </Flex>
            <Flex alignItems={"center"}>
              <Box
                borderRadius={"md"}
                bgColor={"gray.200"}
                border={"1px"}
                borderColor={"white"}
                boxSize={["8", "8", "10", "10"]}
              ></Box>
              <Box m={["2", "2", "2", "2"]}>
                <Text as={"b"} fontSize={["small", "small", "md", "md"]}>
                  Multiple under 100 Ranks
                </Text>
                <Text fontSize={["xs", "xs", "", ""]}>in kickstart last year</Text>
              </Box>
            </Flex>
          </SimpleGrid>
          <SimpleGrid mt={["2", "2", "2", "2"]} columns={2}>
            <Flex alignItems={"center"}>
              <Box
                borderRadius={"md"}
                bgColor={"gray.200"}
                border={"1px"}
                borderColor={"white"}
                boxSize={["8", "8", "10", "10"]}
              ></Box>
              <Box m={["2", "2", "2", "2"]}>
                <Text as={"b"} fontSize={["small", "small", "md", "md"]}>
                  1000+ offers
                </Text>
                <Text fontSize={["xs", "xs", "", ""]}>from top companies</Text>
              </Box>
            </Flex>
            <Flex alignItems={"center"}>
              <Box
                borderRadius={"md"}
                bgColor={"gray.200"}
                border={"1px"}
                borderColor={"white"}
                boxSize={["8", "8", "10", "10"]}
              ></Box>
              <Box m={["2", "2", "2", "2"]}>
                <Text as={"b"} fontSize={["small", "small", "md", "md"]}>
                  Trusted by IITians
                </Text>
                <Text fontSize={["xs", "xs", "", ""]}>for their carrier prep</Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>
      <Box className="price-rightHalf">
        <Box
          boxShadow={"dark-lg"}
          m={["4", "4", "4", "4"]}
          mx={["", "", "28", "28"]}
        >
          <Flex m={"2"} flexDirection={"column"}>
            <Text m={"2"} as={"b"}>
              Premium Victory Batch
            </Text>
            <Text
              textColor={"gray"}
              fontWeight={"extrabold"}
              fontSize={"2xl"}
              as={"s"}
            >
              ₹19,999
            </Text>
            <Text
              textColor={"blue.600"}
              fontWeight={"extrabold"}
              fontSize={"3xl"}
            >
              ₹13,999
            </Text>
          </Flex>
          <Box className="price-background">
            <Flex m={"4"} flexDirection={"column"} textColor={"white"}>
              <Flex m={["2", "2", "2", "2"]} alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text fontSize={["sm", "sm", "", ""]}>
                    100+ Hrs live content
                  </Text>
                </Box>
              </Flex>
              <Flex m={["2", "2", "2", "2"]} alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text fontSize={["sm", "sm", "", ""]}>50+ Hrs Contest</Text>
                </Box>
              </Flex>
              <Flex m={["2", "2", "2", "2"]} alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text fontSize={["sm", "sm", "", ""]}>500+ Problems</Text>
                </Box>
              </Flex>
              <Flex m={["2", "2", "2", "2"]} alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text fontSize={["sm", "sm", "", ""]}>
                    Includes an interview bootcamp and access to a mentor
                    network
                  </Text>
                </Box>
              </Flex>
              <Flex m={["2", "2", "2", "2"]} alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text fontSize={["sm", "sm", "", ""]}>
                    Enjoy access to our content for one year
                  </Text>
                  <Text>(paid extensions available)</Text>
                </Box>
              </Flex>
              <Flex m={["2", "2", "2", "2"]} alignItems={"center"}>
                <Box
                  borderRadius={"md"}
                  bgColor={"05445e"}
                  border={"1px"}
                  borderColor={"white"}
                  boxSize={["8", "8", "10", "10"]}
                ></Box>
                <Box m={["2", "2", "2", "2"]}>
                  <Text fontSize={["sm", "sm", "", ""]}>
                    Flexible payment options, including no-cost EMI, are
                    available
                  </Text>
                </Box>
              </Flex>
              <Button
                m={"4"}
                rightIcon={<ArrowForwardIcon />}
                textColor={"#05445e"}
              >
                Join Now
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
