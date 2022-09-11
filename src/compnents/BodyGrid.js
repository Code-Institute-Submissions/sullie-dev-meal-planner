import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
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
      setMeals(response.data.meals);
      return setMeal(response.data.meals[Math.floor(Math.random() * 10)]);
    };
    searchedMeal();
  }, [search]);

  const searchFunction = () => {
    if (searchTerm.length >= 3) {
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
            <Text>Search for a meal by an ingredient</Text>
          )}
        </Container>
      </GridItem>
    </Grid>
  );
}

export default BodyGrid;
