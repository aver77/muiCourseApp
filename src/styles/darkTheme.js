import { createTheme } from "@mui/material";
// import { makeStyles } from '@mui/styles';

export const darkTheme = createTheme({
    typography: {
        fontFamily: ['Montserrat','sans-serif'].join(','),
        fontSize: 18,
        allVariants: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)'
        },
    },
    components: {
        
    },
    palette: {
        contrastText: '#121212',
        selectedBackground: '#545454',
        primary: {
            main: '#414141',
        },
        background: {
            default: 'rgba(0, 0, 0, 0.67)'
        },
        secondary: {
            main: 'rgba(255, 255, 255, 0.7)'
        },
        action: {
            main: 'rgba(255, 255, 255, 0.7)'
        },
        selection: {
            main: '#121212'
        },
    },
    transitions: '.2s ease'
})