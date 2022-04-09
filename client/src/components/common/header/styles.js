export const headerBoxStyles = () => ({
    flexGrow: 1,
    boxShadow: "0 6px 6px 0px rgba(0, 0, 0, 0.16)",
    zIndex: 999,
});

export const headerStackStyles = theme => ({
    marginLeft: "60px",
    [theme.breakpoints.down("sm")]: {
        marginLeft: "20px",
    },
});
