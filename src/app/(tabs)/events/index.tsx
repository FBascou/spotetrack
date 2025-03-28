import { StyleSheet, View } from 'react-native';
import EventList from '../../../features/events/screens/EventList';
import { userMainTEST } from '../../../utils/data';

const EventsTab = (): JSX.Element => {
    // const eventList = userMainTEST.team_list.flatMap((team) => team.event_list);

    // console.error(eventList);

    return (
        <View style={styles.container}>
            <EventList size={'L'} eventList={userMainTEST.event_list} toggleJoinTeam={false} />
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
