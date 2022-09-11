import React from "react";
import { Button, Container, Input } from "@chakra-ui/react";

export default function SearchField(props) {
  return (
    <Container m={25}>
      <Input
        placeholder="Saerch using an ingredient"
        onChange={props.updateSearchedTerm}
        value={props.searchTerm}
      />
      {props.searched ? (
        <></>
      ) : (
        <Button mt={1} onClick={props.searchFunction}>
          Search
        </Button>
      )}
      {props.searched ? (
        <Button mt={1} mx={1} onClick={props.resetSearch}>
          Reset
        </Button>
      ) : (
        <></>
      )}
    </Container>
  );
}
