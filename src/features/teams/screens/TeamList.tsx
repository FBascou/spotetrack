import CardTeam from '../components/CardTeam';
import { StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { TeamType } from '../types/typesTeams';

type TeamListPropType = {
    teamList: TeamType[];
};

const TeamList = ({ teamList }: TeamListPropType) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ gap: 20 }}
                data={teamList}
                renderItem={({ item }) => <CardTeam team={item} />}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20
    }
});

export default TeamList;
