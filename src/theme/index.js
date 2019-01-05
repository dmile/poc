import {createMuiTheme} from "@material-ui/core";
import {lighten} from "@material-ui/core/styles/colorManipulator";
import common from "@material-ui/core/colors/common";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: lighten(common.black, 0.13)
        },
        secondary: {
            main: lighten(common.black, 0.84)
        }
    },
    typography: {
        useNextVariants: true
    }
    // breakpoints: {
    //     values: {
    //         xs: 0,
    //         sm: 600,
    //         md: 840,
    //         lg: 1284,
    //         xl: 1920
    //     }
    // }
});

export default theme;