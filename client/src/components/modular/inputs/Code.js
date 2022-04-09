import React, { memo } from "react";
import { Box, Container, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { codeContainerStyles, alignStyles } from "./styles";
import { useWithLocalStorages } from "hooks/useWithLocalStorages";
import {
    DARK_COLOR,
    DEFAULT_CODE_ROWS,
    LIGHT_COLOR,
} from "constants/inputValues";
import { SWITCH_THEMES, CURRENT_CODE } from "constants/specificWords";
import { getLocalStorageItem } from "utils/localStorage";
import { ternaryOperation } from "utils/ternaryOperation";

const Code = () => {
    const label = <FormattedMessage id="inputPlaceholder" />;
    const codeValue = useWithLocalStorages(CURRENT_CODE);
    const currentColor = ternaryOperation(
        getLocalStorageItem(SWITCH_THEMES),
        LIGHT_COLOR,
        DARK_COLOR
    );

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
                    InputProps={{ style: { color: currentColor } }}
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
