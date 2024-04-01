import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';

const buttonsJoinCreateTeam = [
    { id: 0, title: 'Create Team', color: Colors.colors.colorAccentBlue, url: 'createteam' },
    { id: 1, title: 'Join Team', color: Colors.colors.colorAccentPink, url: 'jointeam' }
];

const JoinCreateTeam = () => {
    return (
        <View style={styles.container}>
            {buttonsJoinCreateTeam.map((button) => (
                <Link
                    href={`/${button.url}`}
                    key={button.id}
                    style={[styles.button, { backgroundColor: button.color }]}>
                    <Text style={styles.title}>{button.title}</Text>
                </Link>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 40
    },
    button: {
        padding: 30,
        textAlign: 'center'
    },
    title: Typographies.buttonLarge
});

export default JoinCreateTeam;
