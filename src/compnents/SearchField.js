import React from "react";
import { Button, Container, Input } from "@chakra-ui/react";

export default function SearchField() {
  return (
    <Container m={25}>
      <Input placeholder="Saerch using an ingredient" />
      <Button mt={1}>Search</Button>
    </Container>
  );
}
