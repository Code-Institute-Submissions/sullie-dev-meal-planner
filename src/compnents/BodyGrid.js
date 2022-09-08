import { Grid, GridItem, Text } from "@chakra-ui/react";

function BodyGrid() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem colSpan={2} h="10" bg="tomato">
        <Text>1</Text>
      </GridItem>
      <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip" />
    </Grid>
  );
}

export default BodyGrid;
