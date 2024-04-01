import { StyleSheet, View } from 'react-native';
import { teamsTEST } from '../../../utils/testData';
import TeamList from '../../../features/teams/screens/TeamList';

const TeamsTab = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <TeamList teamList={teamsTEST} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center'
    }
});

export default TeamsTab;
