import { StyleSheet, View } from 'react-native';
import TeamList from '../../../features/teams/screens/TeamList';
import { userMainTEST } from '../../../utils/data';

const TeamsTab = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <TeamList teamList={userMainTEST.team_list} />
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
