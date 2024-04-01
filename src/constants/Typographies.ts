import { StyleProp, TextStyle } from 'react-native';
import Colors from '../constants/Colors';

type TypographiesType = StyleProp<TextStyle>;

const h1: TypographiesType = {
    fontSize: 30,
    // marginTop: 50,
    color: Colors.colors.colorPrimary
    // textAlign: 'center'
};

const h2: TypographiesType = {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.colors.colorPrimary
};

const h2Secondary: TypographiesType = {
    fontSize: 22,
    color: Colors.colors.colorTertiary
};

const h3: TypographiesType = {
    fontSize: 20,
    color: Colors.colors.colorPrimary
};

const h3Secondary: TypographiesType = {
    fontSize: 20,
    color: Colors.colors.colorTertiary
};

const h4: TypographiesType = {
    fontSize: 18,
    color: Colors.colors.colorPrimary
};

const h4Secondary: TypographiesType = {
    fontSize: 18,
    color: Colors.colors.colorTertiary
};

const h5: TypographiesType = {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.colors.colorPrimary
};

const p: TypographiesType = {
    fontSize: 18,
    color: Colors.colors.colorPrimary
};

const inputText: TypographiesType = {
    fontSize: 18,
    color: Colors.colors.colorPrimary
};

const inputPlaceholder: TypographiesType = {
    fontSize: 18,
    color: Colors.colors.colorTertiary
};

const buttonPrimary: TypographiesType = {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.colors.colorSecondary
};

const buttonLarge: TypographiesType = {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.colors.colorSecondary
};

const importantText: TypographiesType = {
    fontSize: 16,
    color: Colors.colors.colorAccentRed
};

export default {
    h1,
    h2,
    h2Secondary,
    h3,
    h3Secondary,
    h4,
    h4Secondary,
    h5,
    p,
    inputText,
    inputPlaceholder,
    buttonPrimary,
    buttonLarge,
    importantText
};
