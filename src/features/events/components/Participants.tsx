import { StyleSheet, View, Text } from 'react-native';
import ParticipantsCount from './ParticipantsCount';
import ParticipantsButtons from './ParticipantsButtons';
import { EventType } from '../types/typesEvents';
import Typographies from '../../../constants/Typographies';
import { useState } from 'react';
import useEventsStore from '../stores/useEventsStore';

type ParticipantsPropType = {
    event: EventType;
};

const Participants = ({ event }: ParticipantsPropType) => {
    const setParticipation = useEventsStore((state) => state.setParticipation);
    const [pressYes, setPressYes] = useState<boolean>(false);
    const [pressNo, setPressNo] = useState<boolean>(false);

    // if (!event.status || event.status === undefined) {
    //     return <Text>No status available</Text>;
    // }

    const eventStatusMessage =
        event.status === 'CANCELLED' ? 'EVENT WAS CANCELLED' : 'EVENT HAS ENDED';

    const onJoinEventPress = (choice: string) => {
        if (choice === 'YES') {
            setPressYes((prev) => !prev);
            setParticipation(event);
        } else if (choice === 'NO') {
            setPressNo((prev) => !prev);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <ParticipantsCount
                    countYes={
                        pressYes === false ? event.participants_yes : event.participants_yes + 1
                    }
                    countNo={pressNo === false ? event.participants_no : event.participants_no + 1}
                />
                {event.status === 'CANCELLED' ? null : (
                    <Text style={styles.text}>
                        {event.status !== 'ENDED' && pressNo === false && pressYes === false
                            ? 'Will you participate?'
                            : pressYes === true
                            ? "I'm going"
                            : "I'm not going"}
                    </Text>
                )}
            </View>
            <View>
                {event.status === 'CANCELLED' || event.status === 'ENDED' ? (
                    <Text style={styles.text}>{eventStatusMessage}</Text>
                ) : (
                    <ParticipantsButtons
                        pressYes={pressYes}
                        pressNo={pressNo}
                        onJoinEventPress={onJoinEventPress}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20
    },
    group: {
        flexDirection: 'row',
        gap: 20
    },
    text: Typographies.h4Secondary
});

export default Participants;
