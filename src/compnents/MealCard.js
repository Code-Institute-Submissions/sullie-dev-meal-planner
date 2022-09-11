import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";

export default function MealCard(props) {
  const { mealName, mealImage, resetSearch } = props;

  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={2}
        mx={10}
        overflow={"hidden"}
      >
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {mealName}
        </Heading>
        <Box h={"210px"} mt={5} mx={-6} mb={16} pos={"relative"}>
          <Image src={mealImage} layout="fit" />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Recipe
          </Text>
          <a
            href={`https://google.com/search?q=${mealName}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              onClick={resetSearch}
            >
              Google the recipe
            </Button>
          </a>
        </Stack>
      </Box>
    </Center>
  );
}
