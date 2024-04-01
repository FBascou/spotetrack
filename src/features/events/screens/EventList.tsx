import { StyleSheet, ScrollView } from 'react-native';
import CardEventList from '../components/CardEventList';
import { CardEventListType } from '../types/typesEvents';

const EventList = ({ size, eventList, toggleJoinTeam }: CardEventListType) => {
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
