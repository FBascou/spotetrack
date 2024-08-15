import { StyleSheet, View, Text } from 'react-native';
import useAuthStore from '../../features/auth/stores/useAuthStore';
import { Redirect } from 'expo-router';

const AuthScreen = (): React.JSX.Element => {
    const isUserLoggedIn = useAuthStore((state) => state.isUserLoggedIn);

    if (isUserLoggedIn === false) {
        return <Redirect href="/login" />;
    }

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
