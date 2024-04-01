import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
import { EventType } from '../types/typesEvents';
import Participants from './Participants';

type CardEventSmallPropType = {
    event: EventType;
    toggleJoinTeam: boolean;
};

const CardEventSmall = ({ event, toggleJoinTeam }: CardEventSmallPropType) => {
    return (
        <View style={styles.container}>
            <View style={styles.informationGroup}>
                <Text style={styles.name}>{event.name}</Text>
                {toggleJoinTeam === true ? null : (
                    <View style={styles.information}>
                        <Participants event={event} />
                    </View>
                )}
            </View>
            {toggleJoinTeam === true ? null : (
                <View style={styles.linkGroup}>
                    <Link href={`/events/${event.id}`}>
                        <Ionicons
                            name="caret-forward"
                            size={35}
                            color={Colors.colors.colorAccentPurple}
                        />
                    </Link>
                </View>
            )}
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
        gap: 20
    },
    name: Typographies.h2,
    information: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20
    },
    text: Typographies.p,
    buttonGroup: {},
    button: {},
    linkGroup: {}
});

export default CardEventSmall;
