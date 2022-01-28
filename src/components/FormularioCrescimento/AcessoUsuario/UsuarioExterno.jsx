import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function UsuarioExterno({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [sigla, setSigla] = useState("");
  //const [possoEnviar] = useErros(validacoes);


 
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        ///if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, email, instituicao, sigla });
        ///}
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        ///onBlur={validarCampos}
        ///error={!erros.nome.valido}
        ///helperText={erros.nome.texto}
        id="nome"
        label="Nome"
        name="nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        ///onBlur={validarCampos}
        ///error={!erros.cpf.valido}
        ///helperText={erros.cpf.texto}
        id="Email"
        name="email"
        label="E-mail Institucional"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={instituicao}
        onChange={(event) => {
          setInstituicao(event.target.value);
        }}
        id="instituicao"
        name="instituicao"
        label="Instituição"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sigla}
        onChange={(event) => {
          setSigla(event.target.value);
        }}
        id="sigla"
        name="sigla"
        label="Sigla da Instituição"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
    </form>
  );
}

export default UsuarioExterno;