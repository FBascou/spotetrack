import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
// import { checkAmountIsPlural } from '../../../utils/helpers';
import { TeamType } from '../types/typesTeams';

type CardTeamPropType = {
    team: TeamType;
};

const CardTeam = ({ team }: CardTeamPropType) => {
    return (
        <View style={styles.container}>
            <View style={styles.informationGroup}>
                <Text style={styles.name}>{team.name}</Text>
                <View style={styles.information}>
                    <View style={styles.textGroup}>
                        <FontAwesome name="group" size={20} color={Colors.colors.colorTertiary} />
                        <Text style={styles.text}>{team.member_list.length}</Text>
                    </View>
                    <View style={styles.textGroup}>
                        {/* <FontAwesome
                                name="calendar"
                                size={16}
                                color={Colors.colors.colorTertiary}
                            /> */}
                        <Text style={styles.text}>
                            New Events: {team.event_list.length}
                            {/* {checkAmountIsPlural(team.events.length, 'new event')} */}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <Link href={`/teams/${team.id}`}>
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
    informationGroup: {
        flex: 1,
        gap: 5
    },
    name: Typographies.h2,
    information: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        gap: 30
    },
    textGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    text: Typographies.p,
    buttonGroup: {},
    button: {}
});

export default CardTeam;
