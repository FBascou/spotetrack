import { StyleSheet, Text, View } from 'react-native';
import Typographies from '../../../constants/Typographies';
import { TeamsType } from '../types/typesTeams';

type MembersPropType = {
    team: TeamsType;
};

// find another way to see check if the member.id === team_owner.id
const Members = ({ team }: MembersPropType) => {
    return (
        <View>
            {team.members.length === 0 ? (
                <Text style={styles.text}>No members available</Text>
            ) : (
                team.members
                    .sort((a, b) => a.lastName.localeCompare(b.lastName))
                    .map((member) => (
                        <View key={member.id} style={styles.group}>
                            <Text
                                style={[
                                    styles.text,
                                    {
                                        fontWeight: String(member.id).includes(
                                            String(team.team_owner_id)
                                        )
                                            ? '600'
                                            : 'normal'
                                    }
                                ]}>
                                {`${member.lastName} ${member.firstName}`}{' '}
                                {String(member.id).includes(String(team.team_owner_id))
                                    ? '(Team Creator)'
                                    : ''}
                            </Text>
                        </View>
                    ))
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    text: Typographies.h4,
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 3
    }
});

export default Members;
