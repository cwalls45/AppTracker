import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
    }
}


export const theme = createTheme({
    palette: {
        primary: {
            main: '#6EA243',
            contrastText: '#fefefe'
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        }
    },
    breakpoints: {
        values: {
            xs: false,
            sm: false,
            md: false,
            lg: false,
            xl: false,
        }
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: 0,
                    margin: 0,
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '10px',
                }
            }
        }
    }
});