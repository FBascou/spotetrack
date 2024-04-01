import { ScrollView, StyleSheet } from 'react-native';
import CreateTeam from '../features/teams/screens/CreateTeam';

const CreateTeamScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CreateTeam />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        gap: 20
    }
});

export default CreateTeamScreen;
