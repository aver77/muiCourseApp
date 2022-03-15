import { fontSM, widthSM, hSM } from "../constants/breakpointsValues"

export const fontBreakPoints = (theme) => ({
    color: theme.typography.allVariants.color,
    [theme.breakpoints.down('sm')]: {
        fontSize: fontSM
    }
})

export const headerBreakPoints = (theme) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: hSM
    }
})

export const picsBreakPoints = (theme) => ({
    [theme.breakpoints.down('sm')]: {
        width: widthSM
    }
})