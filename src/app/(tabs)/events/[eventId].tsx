import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';
import Participants from '../../../features/events/components/Participants';
import Typographies from '../../../constants/Typographies';
import { EventType } from '../../../features/events/types/typesEvents';
import { eventsTEST } from '../../../utils/dataEvents';

const EventScreen = () => {
    const { eventId } = useLocalSearchParams();
    const event: EventType = eventsTEST.find((event) => event.id === eventId);

    if (!event) {
        return <Text>Event not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ title: event.name }} />
            <View style={styles.header}>
                <View style={[styles.headerGroup, { flex: 1 }]}>
                    <Text style={styles.headerTitle}>{event.name}</Text>
                    <Text style={styles.headerSubtitle}>{event.team_name}</Text>
                </View>
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
            {event.player_list.map((player) => (
                <Text key={player.id}>
                    {player.member.first_name}
                    {player.member.last_name}
                </Text>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        gap: 20
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

export default EventScreen;
