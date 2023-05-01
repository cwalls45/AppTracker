import { createTheme, darken } from "@mui/material";

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        secondary: true;
    }
}

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
                },
            },
            variants: [
                {
                    props: { variant: 'secondary' },
                    style: {
                        flexGrow: 1,
                        width: '15em',
                        backgroundColor: '#fefefe',
                        '&:hover': {
                            backgroundColor: darken('#fefefe', 0.1),
                        }
                    }
                }
            ]
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
                    color: '#6EA243'
                }
            },
            variants: [
                {
                    props: { color: 'secondary' },
                    style: {
                        color: '#fefefe',
                    },
                },
            ],
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: '1.75rem'
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fefefe',
                    color: '#6EA243',
                    height: '2.4em',
                    width: '2.4em',
                    minHeight: '40px',
                    minWidth: '40px'
                }
            }
        },
    },
});