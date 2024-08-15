import { Link } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
import { EventType } from '../types/typesEvents';
import Participants from './Participants';

type CardEventLargePropType = {
    event: EventType;
    toggleJoinTeam: boolean;
};

const CardEventLarge = ({ event, toggleJoinTeam }: CardEventLargePropType) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={[styles.headerGroup, { flex: 1 }]}>
                    <Text style={styles.headerTitle}>{event.name}</Text>
                    <Text style={styles.headerSubtitle}>{event.team_name}</Text>
                </View>
                {toggleJoinTeam === true ? null : (
                    <View style={styles.headerGroup}>
                        <Link href={`/events/${event.id}`} asChild>
                            <Pressable>
                                <Ionicons
                                    name="caret-forward"
                                    size={35}
                                    color={Colors.colors.colorAccentPurple}
                                />
                            </Pressable>
                        </Link>
                    </View>
                )}
            </View>
            <View style={styles.information}>
                <View style={styles.informationGroup}>
                    <Text style={styles.informationLabel}>Description</Text>
                    <Text style={styles.informationText}>{event.description}</Text>
                </View>
                <View style={styles.informationGroup}>
                    <Text style={styles.informationLabel}>Date</Text>
                    <Text style={styles.informationText}>
                        {event.date} - {event.time}
                    </Text>
                </View>
                <View style={styles.informationGroup}>
                    <Text style={styles.informationLabel}>Location</Text>
                    <Text style={styles.informationText}>{event.location}</Text>
                </View>
                <View style={styles.informationGroup}>
                    <Text style={styles.informationLabel}>Price</Text>
                    <Text style={styles.informationText}>{event.price}</Text>
                </View>
            </View>
            <Participants event={event} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        gap: 20,
        padding: 30,
        height: 575,
        backgroundColor: Colors.colors.colorSecondary,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    headerGroup: {
        // gap: 20
    },
    headerTitle: Typographies.h2,
    headerSubtitle: Typographies.h3Secondary,
    headerText: Typographies.p,
    information: {
        gap: 20
    },
    informationGroup: {
        // gap: 5
    },
    informationLabel: Typographies.h5,
    informationText: Typographies.p,
    linkGroup: {}
});

export default CardEventLarge;
