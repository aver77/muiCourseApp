import { createTheme } from "@mui/material";
import { LIGHT_COLOR } from "constants/inputValues";

export const darkTheme = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 18,
        allVariants: {
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.7)",
        },
    },
    palette: {
        inputText: "rgba(255, 255, 255, 0.7)",
        contrastText: "#121212",
        selectedBackground: "#545454",
        primary: {
            main: "#414141",
        },
        background: {
            default: "rgba(0, 0, 0, 0.67)",
        },
        secondary: {
            main: "rgba(255, 255, 255, 0.7)",
        },
        action: {
            main: "rgba(255, 255, 255, 0.7)",
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
                        color: LIGHT_COLOR,
                    },
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        width: 12,
                        backgroundColor: "#414141",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
                        {
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            minHeight: 32,
                            border: "2px solid #414141",
                        },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                        {
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                        },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                        {
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                        },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                        {
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                        },
                },
            },
        },
    },
});
