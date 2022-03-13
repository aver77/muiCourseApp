import { marginSM, paddingSM } from "../../../../constants/breakpointsValues";

export const codeContainerStyles = theme => ({
    paddingTop: '100px',
    [theme.breakpoints.down('sm')]: {
        paddingTop: paddingSM,
    }
}) 

export const resultContainerStyles = theme => ({
    paddingTop: '30px',
    paddingBottom: '68px',
    [theme.breakpoints.down('md')]: {
        paddingTop: marginSM,
        paddingBottom: paddingSM
    }
}) 
