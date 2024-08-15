import { ScrollView, StyleSheet } from 'react-native';
import Login from '../features/auth/screens/Login';

const LoginScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Login />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        gap: 20
    }
});

export default LoginScreen;
