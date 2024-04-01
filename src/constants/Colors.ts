const tintColorLight = 'rgba(112, 0, 255, 1)';
const tintColorDark = '#fff';

const colors = {
    colorPrimary: 'rgba(0, 0, 0, 1)',
    colorSecondary: 'rgba(255, 255, 255, 1)',
    colorTertiary: 'rgba(135, 135, 135, 1)',
    colorAccentBlue: 'rgba(29, 147, 255, 1)',
    colorAccentPurple: 'rgba(112, 0, 255, 1)',
    colorAccentPink: 'rgba(255, 0, 199, 1)',
    colorAccentRed: 'rgba(255, 0, 0, 1)',
    colorBoxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)'
};

export default {
    light: {
        text: '#000',
        background: '#fff',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight
    },
    dark: {
        text: '#fff',
        background: '#000',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark
    },
    colors
};
