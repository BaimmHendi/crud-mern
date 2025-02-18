import React, { useState } from "react";
import { Container, Heading, Box, useColorModeValue, VStack, Input } from "@chakra-ui/react";

export default function CreatePage() {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading 
          as={"h1"} 
          size={"2xl"} 
          textAlign={"center"} 
          mb={8}
        >
          Create Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input 
              placeholder="Product Name"
              name="name"
              value={newProduct.name} 
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input 
              placeholder="Price"
              name="Price"
              type="number"
              value={newProduct.price} 
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input 
              placeholder="Image URL"
              name="image"
              value={newProduct.image} 
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}
