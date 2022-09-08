import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import SearchField from "./SearchField";

function BodyGrid() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem colSpan={2} h="20">
        <SearchField />
      </GridItem>
      <GridItem colStart={4} colEnd={6} h="100">
        <Container m={25}>
          <Text>No meals looked up</Text>
        </Container>
      </GridItem>
    </Grid>
  );
}

export default BodyGrid;
