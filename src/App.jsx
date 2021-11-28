import React, { useEffect } from "react";
import { StyledHelloWorld } from "./App.styles";

const App = () => {
  useEffect(() => {
    console.log("Hola");
  }, []);
  return <StyledHelloWorld>Hola mundo!</StyledHelloWorld>;
};

export default App;
