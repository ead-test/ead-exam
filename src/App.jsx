import React from "react";
import "./index.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import customTheme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <Hero />
      <Stats />
    </ChakraProvider>
  );
}

export default App;
