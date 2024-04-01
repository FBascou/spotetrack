import { StyleSheet, Text, Pressable, GestureResponderEvent } from 'react-native';
import Colors from '../constants/Colors';
import Typographies from '../constants/Typographies';

type ButtonPropType = {
    text: string | number;
    size?: 'S' | 'M' | 'L';
    color: string;
    onPress: (event: GestureResponderEvent) => void;
};

const Button = ({ color, text, onPress }: ButtonPropType) => {
    const propStyleColor = { backgroundColor: color };
    return (
        <Pressable
            style={({ pressed }) => [styles.button, propStyleColor, { opacity: pressed ? 0.5 : 1 }]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 12,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        textAlign: 'center'
    },
    buttonText: Typographies.buttonPrimary
});

export default Button;
