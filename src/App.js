import React, { Component } from "react";
import "./App.css";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";
import FormularioCrescimento from "./components/FormularioCrescimento/FormularioCrescimento";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography vartiant="h3" component="h1" align="center">
          Growth Parameters Sheet
        </Typography>
          <FormularioCrescimento aoEnviar={aoEnviarForm} />
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
