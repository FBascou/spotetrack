import Profile from '../../../features/users/screens/Profile';
import { StyleSheet, View } from 'react-native';

const ProfileTab = () => {
    return (
        <View style={styles.container}>
            <Profile />
        </View>
    );
};

export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center'
    }
});
