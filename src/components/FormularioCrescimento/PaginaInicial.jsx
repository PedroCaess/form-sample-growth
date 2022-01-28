import React, { useState } from "react";
import { TextField, Button, ButtonGroup, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  const classes = useStyles();

function PaginaInicial({ aoEnviar }) {
    const [date, setDate] = useState("");
    const [totalShots, setTotalShots] = useState("");
    const [sampleName, setSampleName] = useState("");
    const [alias, setAlias] = useState("");
    const [pressaoBase, setPressaoBase] = useState("");
    const [substrate, setSubstrate] = useState("");
    const [targetsUsed, setTargetsUsed] = useState("");
    const [focusTurns, setFocusTurns] = useState("");
    const [fluence, setFluence] = useState("");
  
  

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({
                });
            }}
        >
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button>One</Button>
                <Button>Two</Button>
            </ButtonGroup>
        </form>
    );
}
export default PaginaInicial;