import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            bg: mode('#fff', '#fff')(props),
            color: 'rgba(10, 24, 24, 0.87)'
        },
    }),
};

const colors = {
    brand: {
        50: 'rgba(40, 61, 61, 1)',
        100: 'rgba(10, 24, 24, 0.87)',
        200: 'rgba(10, 24, 24, 0.6)',
        300: 'rgba(8, 132, 80, 1)',
        400: 'rgba(3, 85, 84, 1)',
        500: 'rgba(3, 85, 51, 1)',
        600: 'rgba(243, 245, 245, 1)',
        700: 'rgba(46, 214, 144, 1)',
        800: 'rgba(239, 250, 245, 1)',
        900: 'rgba(209, 212, 212, 1)',
        1000: 'rgba(10, 24, 24, 0.38)',
    },
};

const fonts = {
    heading: `'Figtree Variable', sans- serif`,
    body: `'Figtree Variable', sans- serif`,
};


const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts });
export default theme;