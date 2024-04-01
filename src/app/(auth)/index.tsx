import { StyleSheet, View, Text } from 'react-native';

const AuthScreen = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>Auth</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center'
    }
});

export default AuthScreen;
