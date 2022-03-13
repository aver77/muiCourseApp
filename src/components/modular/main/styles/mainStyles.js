import { marginSM } from "../../../../constants/breakpointsValues";

export const mainStyles = theme => ({
    flexGrow: 1,
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        marginTop: marginSM,
    }
})