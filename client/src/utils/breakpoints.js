import { smallSize, hugeSize, mediumSize } from "constants/breakpointsValues";

export const fontBreakPoints = theme => ({
    color: theme.typography.allVariants.color,
    [theme.breakpoints.down("sm")]: {
        fontSize: smallSize,
    },
});

export const headerBreakPoints = theme => ({
    [theme.breakpoints.down("sm")]: {
        fontSize: hugeSize,
    },
});

export const picsBreakPoints = theme => ({
    [theme.breakpoints.down("sm")]: {
        width: mediumSize,
    },
});
