import { useState } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return <Box backgroundColor={"tomato"}>Its working!</Box>;
}

export default App;
