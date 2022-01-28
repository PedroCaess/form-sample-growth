import React, { useState } from "react";
import { TextField, Button, ButtonGroup, makeStyles} from "@material-ui/core";
import UsuarioExterno from "./AcessoUsuario/UsuarioExterno";
import UsuarioInterno from "./AcessoUsuario/UsuarioInterno";


function PaginaInicial({ aoEnviar }) {
    const [isInternal, setTipo] = useState(true);
    const [colorInt, setColorInt] = useState("primary")
    const [colorExt, setColorExt] = useState("inherit")


   

    const handleInternalClick = (event) => {
        setTipo(true);
        setColorInt("primary");
        setColorExt("inherit");
    };

    const handleExternalClick = (event) => {
        setTipo(false);
        setColorInt("inherit");
        setColorExt("primary");
    };
  
  

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({
                });
            }}
        >
            <ButtonGroup variant="contained" color="primary" fullWidth>
                <Button
                    onClick={handleInternalClick}
                    //value = {isInternal}
                    variant="contained"
                    color={colorInt}
                >
                    LCIS User
                </Button>
                <Button
                    onClick={handleExternalClick}
                    //value = {isInternal}
                    variant="contained"
                    color={colorExt}
                >
                    External User
                </Button>
            </ButtonGroup>

            {isInternal
                ? <UsuarioInterno />
                : <UsuarioExterno />
            }
       
            

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>

        </form>
    );
}
export default PaginaInicial;