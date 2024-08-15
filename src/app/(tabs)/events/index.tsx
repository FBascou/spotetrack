import { StyleSheet, View } from 'react-native';
import EventList from '../../../features/events/screens/EventList';
import { eventsTEST } from 'src/utils/dataEvents';

const EventsTab = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <EventList size={'L'} eventList={eventsTEST} toggleJoinTeam={false} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center'
    }
});

export default EventsTab;
