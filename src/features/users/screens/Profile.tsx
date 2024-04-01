import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
import CardProfileList from '../components/CardProfileList';

const Profile = () => {
    return (
        <View style={styles.container}>
            <CardProfileList />
            <View style={styles.linkGroup}>
                <Link href={'/'} asChild replace>
                    <Text style={styles.linkText}>Log out</Text>
                    {/* <Ionicons name="exit" size={35} color={Colors.colors.colorAccentPurple} /> */}
                </Link>
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        gap: 70
    },
    linkGroup: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 20
    },
    linkText: Typographies.h3
});
