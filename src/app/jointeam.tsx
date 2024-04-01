import { ScrollView, StyleSheet } from 'react-native';
import JoinTeam from '../features/teams/screens/JoinTeam';

const JoinTeamScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <JoinTeam />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        gap: 20
    }
});

export default JoinTeamScreen;
