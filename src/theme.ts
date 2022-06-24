import { createTheme } from "@mui/material";

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
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: 0,
                    margin: 0,
                    minWidth: '100vw'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '10px',
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                },
                container: {
                    margin: '10px',
                }
            }
        },
    }
});