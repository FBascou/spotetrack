import { StyleSheet, ScrollView } from 'react-native';
import CardEventList from '../components/CardEventList';
import { EventType } from '../types/typesEvents';

type EventListPropType = {
    size: 'S' | 'L';
    eventList: EventType[];
    toggleJoinTeam: boolean;
};

const EventList = ({ size, eventList, toggleJoinTeam }: EventListPropType) => {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <CardEventList size={size} eventList={eventList} toggleJoinTeam={toggleJoinTeam} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20
    }
});

export default EventList;
