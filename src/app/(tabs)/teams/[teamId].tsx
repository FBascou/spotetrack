import { useLocalSearchParams, Link, useNavigation } from 'expo-router';
import { Stack } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import ShareButtons from '../../../components/ShareButtons';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
import Events from '../../../features/events/screens/EventList';
import { EventType } from '../../../features/events/types/typesEvents';
import { checkAmountIsPlural } from '../../../utils/helpers';
// import KitColors from '../../../components/KitColors';
import Members from '../../../features/teams/components/Members';
import useTeamsStore from '../../../features/teams/stores/useTeamsStore';
import { user1TEST } from '../../../utils/testData';
import { TeamType } from '../../../features/teams/types/typesTeams';

const TeamScreen = () => {
    const navigation = useNavigation();
    const { teamId } = useLocalSearchParams();
    const { teams } = useTeamsStore();
    const team: TeamType = teams.find((team) => team.id === teamId);
    const isTeamOwner: boolean = true;

    // Pressable? Link hierarchy? Styles?
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                if (!isTeamOwner) {
                    return null;
                } else {
                    return (
                        <Pressable>
                            <Link href="/modal">Edit Team</Link>
                        </Pressable>
                    );
                }
            }
        });
    }, [navigation]);

    if (user1TEST.teams === null || user1TEST.teams === undefined) {
        return <Text>Team not found</Text>;
    }

    if (!team) {
        return <Text>Team not found</Text>;
    }

    const hasUserJoined = user1TEST.teams.some((item) => item.id === Number(team.id));
    const [toggleJoinTeam, setToggleJoinTeam] = useState<boolean>(hasUserJoined);
    const upcomingEvents: EventType[] = team.event_list.filter(
        (event) => event.status !== 'CANCELLED' && event.status !== 'ENDED'
    );

    const onJoinTeamPress = () => {
        setToggleJoinTeam((prev) => !prev);

        if (toggleJoinTeam === true) {
            // add team to user
        } else {
            // remove team from user
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Stack.Screen options={{ title: team.name }} />
            <View style={styles.header}>
                <Text style={styles.title}>{team.name}</Text>
                <View style={styles.headerGroup}>
                    <Button
                        text={toggleJoinTeam ? 'Join Team' : 'Leave Team'}
                        color={
                            toggleJoinTeam
                                ? Colors.colors.colorAccentPurple
                                : Colors.colors.colorTertiary
                        }
                        onPress={onJoinTeamPress}
                    />
                    {team.event_list.length === 0 ? (
                        <Text style={[styles.eventUpdate, { color: Colors.colors.colorTertiary }]}>
                            No upcoming events
                        </Text>
                    ) : (
                        <Text
                            style={[
                                styles.eventUpdate,
                                { color: Colors.colors.colorAccentPurple }
                            ]}>
                            {checkAmountIsPlural(upcomingEvents.length, 'new event')}
                        </Text>
                    )}
                </View>
            </View>
            <View style={styles.group}>
                <View style={styles.descriptionGroup}>
                    <Text style={styles.groupTitle}>Sport</Text>
                    <Text style={styles.groupText}>{team.sport}</Text>
                </View>
                <View style={styles.descriptionGroup}>
                    <Text style={styles.groupTitle}>Team Type</Text>
                    <Text style={styles.groupText}>{team.type}</Text>
                </View>
                <View style={styles.descriptionGroup}>
                    <Text style={styles.groupTitle}>Members</Text>
                    <Text
                        style={
                            styles.groupText
                        }>{`${team.member_list.length}/${team.max_members}`}</Text>
                </View>
                {/* <View style={styles.kitColorGroup}>
                    <Text style={styles.groupTitle}>Kit Colors</Text>
                    <KitColors kitColors={team.kit_colors} />
                </View> */}
            </View>
            <View style={styles.group}>
                <Text style={styles.groupTitle}>Events ({team.event_list.length})</Text>
                <Events size="S" eventList={team.event_list} toggleJoinTeam={toggleJoinTeam} />
            </View>
            <View style={styles.group}>
                <Text style={styles.groupTitle}>Members ({team.member_list.length})</Text>
                <View>
                    {!toggleJoinTeam ? (
                        <Members team={team} />
                    ) : (
                        <View>
                            <Text style={styles.groupText}>
                                To see the member list you must join this team
                            </Text>
                            <Button
                                text={'Join Team'}
                                color={Colors.colors.colorAccentPurple}
                                onPress={onJoinTeamPress}
                            />
                        </View>
                    )}
                </View>
            </View>
            <View>{team.open_to_guests ? <ShareButtons /> : null}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        gap: 40
    },
    header: {
        gap: 20
    },
    headerGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 40
    },
    title: Typographies.h1,
    eventUpdate: Typographies.h4,
    group: {
        gap: 20,
        paddingTop: 40,
        borderTopWidth: 1,
        borderTopColor: Colors.colors.colorTertiary
    },
    descriptionGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    kitColorGroup: {
        gap: 15
    },
    groupTitle: Typographies.h2,
    groupText: Typographies.h4,
    groupKits: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 40
    },
    groupKit: {
        flex: 1,
        height: 50,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 1
    },
    groupTable: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 3
    }
});

export default TeamScreen;
