import React from "react";
import { Container } from "@mui/material";
import { SafeEnviromentContainer } from "./styles";

const SafeEnvironment = () => {
    return (
        <Container>
            <SafeEnviromentContainer>
                Ambiente 100% Seguro <span className={"twf-lock"} />
            </SafeEnviromentContainer>
        </Container>
    );
};

export default SafeEnvironment;
