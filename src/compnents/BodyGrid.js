import {
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MealCard from "./MealCard";
import SearchField from "./SearchField";
const axios = require("axios");

function BodyGrid() {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [meal, setMeal] = useState({});

  useEffect(() => {
    const searchedMeal = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
      );
      setMeal(
        response.data.meals[
          Math.floor(Math.random() * response.data.meals.length)
        ],
      );
    };
    searchedMeal();
  }, [search]);

  const searchFunction = () => {
    if (searchTerm.length >= 3) {
      console.log("searching");
      setSearch(true);
    }
  };

  const resetSearch = () => {
    if (search === true) {
      setSearch(!search);
      setSearchTerm("");
      setMeal({});
    }
  };

  const updateSearchedTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Stack direction={{ sm: "column", lg: "row" }} spacing="24px">
      <SearchField
        searchFunction={searchFunction}
        resetSearch={resetSearch}
        searchTerm={searchTerm}
        searched={search}
        updateSearchedTerm={updateSearchedTerm}
      />
      <Container m={25} w={{ md: "100%" }}>
        {search ? (
          <MealCard
            mealName={meal.strMeal}
            mealImage={meal.strMealThumb}
            resetSearch={resetSearch}
          />
        ) : (
          <>
            <Heading> How to seach for a recipie</Heading>
            <UnorderedList>
              <ListItem>
                Enter an ingredient in the search bar (min 3 letters)
              </ListItem>
              <ListItem>Click search</ListItem>
              <ListItem>A random dish will be picked</ListItem>
              <ListItem>
                Click the button to Google the recipe to find your favoirte
                version
              </ListItem>
              <ListItem>
                Click reset to start again if you don't like the choice
              </ListItem>
            </UnorderedList>
            <br></br>
            <Text as={"b"}>
              If we can't find a dish for your ingrdient we will automatically
              search for a random dish, if you don't like it just reset the
              search
            </Text>
          </>
        )}
      </Container>
    </Stack>
  );
}

export default BodyGrid;
