import React, { memo } from "react";
import { TextField, Box, Container } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { resultContainerStyles, alignStyles } from "./styles";
import { SWITCH_THEMES } from "constants/specificWords";
import {
    DEFAULT_RESULT_ROWS,
    LIGHT_COLOR,
    DARK_COLOR,
} from "constants/inputValues";
import { ternaryOperation } from "utils/ternaryOperation";
import { getLocalStorageItem } from "utils/localStorage";

const Result = ({ serverAnswer }) => {
    const label = <FormattedMessage id="outputPlaceholder" />;
    const currentColor = ternaryOperation(
        getLocalStorageItem(SWITCH_THEMES),
        LIGHT_COLOR,
        DARK_COLOR
    );

    return (
        <Container maxWidth="xxl" sx={resultContainerStyles}>
            <Box sx={alignStyles}>
                <TextField
                    inputProps={{
                        readOnly: true,
                        disableUnderline: true,
                        style: { color: currentColor },
                    }}
                    id="outlined-multiline-static"
                    label={label}
                    multiline
                    rows={DEFAULT_RESULT_ROWS}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={ternaryOperation(
                        serverAnswer,
                        serverAnswer,
                        undefined
                    )}
                />
            </Box>
        </Container>
    );
};

export default memo(Result);
