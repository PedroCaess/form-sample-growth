import React, { useState, useContext } from "react";
import { TextField, Button, InputLabel, FormControl, MenuItem, Select } from "@material-ui/core";

function UsuarioInterno({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [grupo, setGrupo] = useState("");
  const [open, setOpen] = useState(false);
  ///const [possoEnviar] = useErros(validacoes);


 
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        ///if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, email, grupo });
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
      <FormControl
        margin="normal"
        fullWidth
      >
        <InputLabel id="Grupo">Grupo</InputLabel>
        <Select
          labelId="Grupo"
          id="Selecao-de-Grupo"
          open={open}
          onClose={() => {
            setOpen(false)
          }}
          onOpen={() => {
            setOpen(true);
          }}
          value={grupo}
          onChange={(event) => {
              setGrupo(event.target.value)
          }}
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value={"LCIS"}>LCIS</MenuItem>
          <MenuItem value={"IPE"}>IPE</MenuItem>
          <MenuItem value={"SABIA"}>SABIA</MenuItem>
        </Select>
      </FormControl>
      
    </form>
  );
}

export default UsuarioInterno;