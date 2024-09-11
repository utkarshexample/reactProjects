import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Container from "./components/Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <h1>Counter</h1>
        <Hero></Hero>
      </Container>
    </>
  );
}

export default App;
