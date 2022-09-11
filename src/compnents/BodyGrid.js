import {
  Container,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
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
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem colSpan={2} h="20">
        <SearchField
          searchFunction={searchFunction}
          resetSearch={resetSearch}
          searchTerm={searchTerm}
          searched={search}
          updateSearchedTerm={updateSearchedTerm}
        />
      </GridItem>
      <GridItem colStart={4} colEnd={6} h="100">
        <Container m={25}>
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
                search for a random dish, igf you don't like it just reset the
                search
              </Text>
            </>
          )}
        </Container>
      </GridItem>
    </Grid>
  );
}

export default BodyGrid;
