import React, { memo } from "react";
import { Box, Container, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { codeContainerStyles, alignStyles } from "./styles";
import { useWithLocalStorages } from "hooks/useWithLocalStorages";
import { DEFAULT_CODE_ROWS } from "constants/inputValues";
import { CURRENT_CODE } from "constants/specificWords";
import { ternaryOperation } from "utils/ternaryOperation";

const Code = () => {
    const label = <FormattedMessage id="inputPlaceholder" />;
    const codeValue = useWithLocalStorages(CURRENT_CODE);

    const handleTextField = e => {
        if (e.target.value) {
            codeValue.variableHandler(e.target.value);
        } else {
            codeValue.variableHandler(false);
        }
    };

    return (
        <Container maxWidth="xxl" sx={codeContainerStyles}>
            <Box sx={alignStyles}>
                <TextField
                    id="outlined-multiline-static"
                    label={label}
                    multiline
                    rows={DEFAULT_CODE_ROWS}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    disabled={false}
                    value={ternaryOperation(
                        codeValue.variable,
                        codeValue.variable,
                        undefined
                    )}
                    onChange={handleTextField}
                />
            </Box>
        </Container>
    );
};

export default memo(Code);
