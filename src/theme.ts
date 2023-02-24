import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#6EA243',
            contrastText: '#fefefe'
        },
        secondary: {
            main: '#fefefe',
            contrastText: '#6EA243',
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
                    boxShadow: 'none',
                }
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                },
                container: {
                    margin: '0',
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    margin: '0px 0px 10px 0px',
                    boxShadow: 'none',
                    minHeight: '3vh'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    height: 'fit-content',
                    margin: '1em',
                    boxShadow: 'none',
                    outline: '1px solid #d3d3d3'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#fefefe'
                }
            }
        }
    }
});