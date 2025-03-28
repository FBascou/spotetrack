import { StyleSheet, Text, View } from 'react-native';
import Typographies from '../../../constants/Typographies';
import { TeamType } from '../types/typesTeams';

type MemberListPropType = {
    team: TeamType;
};

// find another way to see check if the member.id === team_owner.id
const MemberList = ({ team }: MemberListPropType) => {
    return (
        <View>
            {team.member_list.length === 0 ? (
                <Text style={styles.text}>No members available</Text>
            ) : (
                team.member_list
                    .sort((a, b) => a.last_name.localeCompare(b.last_name))
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
                                {`${member.last_name} ${member.first_name}`}{' '}
                                {String(member.id).includes(String(team.team_owner_id))
                                    ? '(Team Owner)'
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

export default MemberList;
