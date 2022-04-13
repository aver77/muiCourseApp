import { createTheme } from "@mui/material";
import { DARK_COLOR } from "constants/inputValues";

export const lightTheme = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 18,
        allVariants: {
            fontWeight: 500,
            color: "#121212",
        },
    },
    palette: {
        inputText: "#121212",
        contrastText: "#121212",
        selectedBackground: "#fff",
        primary: {
            main: "#BDBDBD",
        },
        background: {
            default: "rgba(255, 255, 255, 0.7)",
        },
        secondary: {
            main: "rgba(0, 0, 0, 0.6)",
        },
        action: {
            main: "#121212",
        },
        selection: {
            main: "#121212",
        },
    },
    transitions: ".2s ease",
    //input color and scrollbar
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "& .MuiInputBase-root": {
                        color: DARK_COLOR,
                    },
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width: 12,
                        backgroundColor: "#BDBDBD",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
                        {
                            backgroundColor: "rgba(255, 255, 255)",
                            minHeight: 32,
                            border: "2px solid #BDBDBD",
                        },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                        {
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                        },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                        {
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                        },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                        {
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                        },
                },
            },
        },
    },
});
