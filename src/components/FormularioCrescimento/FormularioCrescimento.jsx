import React, { useState, useEffect } from "react";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import PaginaInicial from "./PaginaInicial";

function FormularioCrescimento({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <PaginaInicial aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Who is growing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Initial informations</StepLabel>
        </Step>
        <Step>
          <StepLabel>Setup informations</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pre-ablation informations</StepLabel>
        </Step>
        <Step>
          <StepLabel>Growth informations</StepLabel>
        </Step>
        <Step>
          <StepLabel>Annealing informations</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCrescimento;