import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const testTheme = createTheme({
    typography: {
        fontFamily: 'Lato',
        useNextVariants: true,
    },
    overrides: {
        MuiInputBase: {
            input: { fontSize: 16 }
        },
        MuiFormLabel: {
            root: { fontSize: 16 }
        },
        MuiInputLabel: {
            shrink: { transform: 'translate(14px, -9px) scale(0.9) !important' }
        },
        MuiBackdrop: {
            root: {
                zIndex: '20 !important'
            }
        },
        MuiButton: {
            root: {
                borderRadius: 24,
                fontFamily: 'Lato',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '20px',
                padding: '12px 16px',
                textTransform: 'inherit',
                '&.Mui-disabled': {
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#e6e6e6'
                }
            },
            containedPrimary: {
                color: 'white'
            },
            outlinedSecondary: {
                padding: '12px 16px',
                background: 'white',
                border: '1px solid'
            }
        },
        MuiDivider: {
            light: {
                backgroundColor: 'white',
                marginBottom: 10
            }
        },
        MuiBottomNavigation: {
            root: {
                height: 80,
                backgroundColor: '#31405D',
                borderRadius: '8px 8px 0px 0px'
            }
        },
        MuiBottomNavigationAction: {
            root: {
                color: 'white',
                '&.Mui-selected': {
                    color: 'white',
                    background: '#ffffff33'
                }
            },
            label: {
                fontSize: 15
            }
        },
        MuiTab: {
            root: {
                textTransform: 'inherit'
            }
        },
        MuiAccordion: {
            root: {
                border: '1px solid #2CC8A7',
                borderRadius: '4px !important'
            }
        },
        MuiAccordionSummary: {
            content: {
                display: 'block'
            }
        },
        MuiCardHeader: {
            title: {
                // textOverflow: 'ellipsis',
                // whiteSpace: 'nowrap',
                overflow: 'hidden'
            },
            subheader: {
                fontSize: 16
            }
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        }
    },
    palette: {
        primary: { main: '#2CC8A7' },
        secondary: { main: '#31505D' },
        error: red
    }
});

testTheme.overrides.MuiCardHeader.subheader = {
    fontSize: 16,
    [testTheme.breakpoints.up('md')]: {
        fontSize: 10
    }
}
// TYPOGRAPHY STYLES
testTheme.typography.h1 = {
    fontFamily: 'Poppins',
    fontSize: '40px',
    fontWeight: 900,
    lineHeight: '40px',
    [testTheme.breakpoints.up('md')]: {
        lineHeight: '48px',
        fontSize: '48px',
    },
};

testTheme.typography.h2 = {
    fontFamily: 'Poppins',
    fontSize: '25px',
    lineHeight: '32px',
    fontWeight: 700,
    [testTheme.breakpoints.up('sm')]: {
        fontSize: '32px',
        lineHeight: '32px',
    },
    [testTheme.breakpoints.up('md')]: {
        fontSize: '40px',
        lineHeight: '40px',
    },
};

testTheme.typography.h3 = {
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '24px',
    [testTheme.breakpoints.up('md')]: {
        fontSize: '32px',
        lineHeight: '32px',
    },
};

testTheme.typography.h4 = {
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '20px',
    [testTheme.breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '24px',
    },
};

testTheme.typography.subtitle1 = {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 500
};

testTheme.typography.body1 = {
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: 400
};

testTheme.typography.body2 = {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400
};

testTheme.typography.caption = {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 400
};

export default testTheme;