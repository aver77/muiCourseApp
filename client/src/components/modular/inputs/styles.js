import { marginSmall, paddingSmall } from "constants/breakpointsValues";

export const codeContainerStyles = theme => ({
    paddingTop: "100px",
    [theme.breakpoints.down("sm")]: {
        paddingTop: paddingSmall,
    },
});

export const resultContainerStyles = theme => ({
    paddingTop: "30px",
    paddingBottom: "68px",
    [theme.breakpoints.down("md")]: {
        paddingTop: marginSmall,
        paddingBottom: paddingSmall,
    },
});

export const alignStyles = () => ({
    textAlign: "center",
});
