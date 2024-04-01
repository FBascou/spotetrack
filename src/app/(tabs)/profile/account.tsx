import Account from '../../../features/users/screens/Account';
import { StyleSheet, View } from 'react-native';

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Account />
        </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center'
    }
});
