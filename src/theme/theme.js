import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiDivider: {
            root: {
                margin: '8px 0'
            }
        }
    }
});

export default theme;
