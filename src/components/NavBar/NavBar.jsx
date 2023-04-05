import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom";

export default function Simple() {
  return (
    <>
      <Box bg={useColorModeValue("#171923a8")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Text fontSize="2xl" fontWeight="bold" fontFamily="heading">
              Welcome To Test Zone
            </Text>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <ReachLink
                px={2}
                py={1}
                rounded={"md"}
                _hover={{ textDecoration: "none" }}
                to="/"
              >
                Home
              </ReachLink>
            </HStack>
          </HStack>
        </Flex>

        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <ReachLink
              px={2}
              py={1}
              rounded={"md"}
              _hover={{ textDecoration: "none" }}
              to="/"
            >
              Home
            </ReachLink>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
