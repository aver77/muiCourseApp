import { fontSM, widthSM, hSM } from "../constants/breakpointsValues";
import { createTheme } from "@mui/material";

const theme = createTheme();

export const fontBreakPoints = () => ({
    color: theme.typography.allVariants.color,
    [theme.breakpoints.down('sm')]: {
        fontSize: fontSM
    }
})

export const headerBreakPoints = () => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: hSM
    }
})

export const picsBreakPoints = () => ({
    [theme.breakpoints.down('sm')]: {
        width: widthSM
    }
})