import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    typography: {
        fontFamily: ['Montserrat','sans-serif'].join(','),
        fontSize: 18,
        allVariants: {
            fontWeight: 500,
            color: '#121212'
        },   
    },
    palette: {
        contrastText: '#121212',
        selectedBackground: '#fff',
        primary: {
            main: '#BDBDBD', 
        },
        background: {
            default: 'rgba(255, 255, 255, 0.7)'
        },
        secondary: {
            main: 'rgba(0, 0, 0, 0.6)'
        },
        action: {
            main: '#121212',
            
        },
        selection: {
            main: '#121212'
        }
    },
    transitions: '.2s ease'
})