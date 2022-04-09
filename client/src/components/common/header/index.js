import React, { memo } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Stack,
    useMediaQuery,
} from "@mui/material";
import { LightMode, ModeNight } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { FormattedMessage } from "react-intl";

import Switching from "./Switching";
import { headerBoxStyles, headerStackStyles } from "./styles";
import {
    fontBreakPoints,
    headerBreakPoints,
    picsBreakPoints,
} from "utils/breakpoints";
import { ternaryOperation } from "utils/ternaryOperation";

const Header = ({ localizationHandler, currentThemeHandler }) => {
    const theme = useTheme();
    const title = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={headerBoxStyles}>
            <AppBar color="primary" position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{ flexGrow: 1 }}
                        sx={headerBreakPoints}
                    >
                        {ternaryOperation(title, "NW", "NW Compiler")}
                    </Typography>
                    <Stack direction="row" alignItems="center">
                        <LightMode sx={picsBreakPoints} color="action" />
                        <Switching
                            isTheme={true}
                            localizationHandler={localizationHandler}
                            currentThemeHandler={currentThemeHandler}
                        />
                        <ModeNight sx={picsBreakPoints} color="action" />
                    </Stack>
                    <Stack
                        sx={headerStackStyles}
                        direction="row"
                        alignItems="center"
                    >
                        <Typography sx={fontBreakPoints}>
                            <FormattedMessage id="ru" />
                        </Typography>
                        <Switching
                            isTheme={false}
                            localizationHandler={localizationHandler}
                            currentThemeHandler={currentThemeHandler}
                        />
                        <Typography sx={fontBreakPoints}>
                            <FormattedMessage id="eng" />
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default memo(Header);
