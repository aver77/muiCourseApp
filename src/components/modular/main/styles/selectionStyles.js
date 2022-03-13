export const selectionBoxStyles = theme => ({
    width: 280,
    [theme.breakpoints.down('sm')]: {
        width: 180
    }
})

export const selectionInputStyles = theme => ({
    marginTop: '-6px',
    marginLeft: '-4px',
    [theme.breakpoints.down('sm')]: {
        fontSize: 14
    }
})