import Privacy from '../../../features/users/screens/Privacy';
import { StyleSheet, View } from 'react-native';

const PrivacyScreen = () => {
    return (
        <View style={styles.container}>
            <Privacy />
        </View>
    );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center'
    }
});
