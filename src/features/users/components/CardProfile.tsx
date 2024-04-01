import { Link, Route } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';

type CardProfilePropType = {
    name: string;
};

const CardProfile = ({ name }: CardProfilePropType) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerGroup}>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.linkGroup}>
                <Link href={`/(tabs)/profile/${name}` as Route<string>}>
                    <Ionicons
                        name="caret-forward"
                        size={35}
                        color={Colors.colors.colorAccentPurple}
                    />
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
        padding: 20,
        backgroundColor: Colors.colors.colorSecondary,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 1
    },
    headerGroup: {
        flex: 1,
        gap: 20
    },
    name: {
        textTransform: 'capitalize',
        ...Typographies.h2
    },
    linkGroup: {}
});

export default CardProfile;
