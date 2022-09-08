import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import MealCard from "./MealCard";
import SearchField from "./SearchField";

function BodyGrid() {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchFunction = () => {
    if (!search && searchTerm.length > 0) {
      setSearch(!search);
      console.log(searchTerm);
    }
    if (search === true) {
      setSearch(!search);
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
          searched={search}
          updateSearchedTerm={updateSearchedTerm}
        />
      </GridItem>
      <GridItem colStart={4} colEnd={6} h="100">
        <Container m={25}>
          {search ? (
            <MealCard />
          ) : (
            <Text>Search for a meal by an ingredient</Text>
          )}
        </Container>
      </GridItem>
    </Grid>
  );
}

export default BodyGrid;
