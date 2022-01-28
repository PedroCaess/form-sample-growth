import React, { useState } from "react";
import { TextField, Button, ButtonGroup, makeStyles} from "@material-ui/core";

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
            <ButtonGroup variant="contained" color="primary" fullWidth>
                <Button type="submit" variant="contained" color="primary">
                    LCIS User
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    External User
                </Button>
            </ButtonGroup>
        </form>
    );
}
export default PaginaInicial;