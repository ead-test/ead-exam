import React from "react";
import "./index.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import customTheme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <Hero />
    </ChakraProvider>
  );
}

export default App;
