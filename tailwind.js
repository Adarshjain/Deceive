const {colors} = require('tailwindcss/defaultTheme')
module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        borderRadius: {
            'none': '0',
            '4': '0.25rem',
            '6': '0.375rem',
            '8': '0.5rem',
            '50': '50%',
        },
        colors: {
            ...colors,
            primary: {
                '50': 'rgb(242, 233, 255)',
                '100': 'rgb(218, 192, 255)',
                '200': 'rgb(160, 102, 242)',
                '300': 'rgb(90, 40, 210)',
                '400': 'rgb(98, 0, 234)',
                '600': 'rgb(78, 14, 166)',
                '800': 'rgb(44, 0, 105)',
                '1000': 'rgb(29, 0, 70)'
            },
            violet: {
                '50': 'rgb(242, 233, 255)',
                '100': 'rgb(218, 192, 255)',
                '200': 'rgb(160, 102, 242)',
                '300': 'rgb(90, 40, 210)',
                '400': 'rgb(98, 0, 234)',
                '600': 'rgb(78, 14, 166)',
                '800': 'rgb(44, 0, 105)',
                '1000': 'rgb(29, 0, 70)'
            },
            green: {
                '50': 'rgb(242, 255, 240)',
                '100': 'rgb(196, 247, 186)',
                '200': 'rgb(150, 212, 138)',
                '400': 'rgb(80, 184, 60)',
                '600': 'rgb(71, 163, 54)',
                '800': 'rgb(48, 110, 36)',
                '1000': 'rgb(36, 82, 27)'
            },
            yellow: {
                '50': 'rgb(255, 250, 232)',
                '100': 'rgb(248, 234, 171)',
                '200': 'rgb(255, 234, 138)',
                '400': 'rgb(238, 194, 0)',
                '600': 'rgb(202, 164, 0)',
                '800': 'rgb(138, 97, 22)',
                '1000': 'rgb(87, 59, 0)'
            },
            red: {
                '50': 'rgb(255, 235, 235)',
                '100': 'rgb(255, 200, 189)',
                '200': 'rgb(255, 148, 128)',
                '400': 'rgb(222, 54, 24)',
                '600': 'rgb(173, 35, 17)',
                '800': 'rgb(64, 15, 15)',
                '1000': 'rgb(51, 2, 2)'
            },
            blue: {
                '50': 'rgb(244, 247, 252)',
                '100': 'rgb(219, 230, 255)',
                '200': 'rgb(168, 203, 255)',
                '400': 'rgb(0, 82, 204)',
                '600': 'rgb(17, 73, 157)',
                '800': 'rgb(30, 61, 128)',
                '1000': 'rgb(15, 31, 64)'
            }
        },
        transitionProperty: { // defaults to these values
            'none': 'none',
            'all': 'all',
            'color': 'color',
            'bg': 'background-color',
            'border': 'border-color',
            'colors': ['color', 'background-color', 'border-color'],
            'opacity': 'opacity',
            'transform': 'transform',
        },
        transitionDuration: { // defaults to these values
            'default': '250ms',
            '0': '0ms',
            '100': '100ms',
            '250': '250ms',
            '500': '500ms',
            '750': '750ms',
            '1000': '1000ms',
        },
        transitionTimingFunction: { // defaults to these values
            'default': 'ease',
            'linear': 'linear',
            'ease': 'ease',
            'ease-in': 'ease-in',
            'ease-out': 'ease-out',
            'ease-in-out': 'ease-in-out',
        },
        transitionDelay: { // defaults to these values
            'default': '0ms',
            '0': '0ms',
            '100': '100ms',
            '250': '250ms',
            '500': '500ms',
            '750': '750ms',
            '1000': '1000ms',
        },
        willChange: { // defaults to these values
            'auto': 'auto',
            'scroll': 'scroll-position',
            'contents': 'contents',
            'opacity': 'opacity',
            'transform': 'transform',
        },
    },
    variants: { // all the following default to ['responsive']
        transitionProperty: ['responsive'],
        transitionDuration: ['responsive'],
        transitionTimingFunction: ['responsive'],
        transitionDelay: ['responsive'],
        willChange: ['responsive'],
    },
    plugins: [
        require('tailwindcss-transitions')(),
    ],
};
