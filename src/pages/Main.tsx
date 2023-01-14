import { Button } from "../components/Button";
import { categories } from "../mockData/categories";
import { Text } from "@chakra-ui/react";

export function Main() {
  return <div>
      <Text mb={4} fontSize='4xl'>Mad Libs</Text>
      <h3>Categories</h3>
      {categories.map((category)=>{
          return <Button>{category.name}</Button>
      })}

      
  </div>;
}
