// import { Link } from 'expo-router';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { CardEventListType } from '@/features/events/types/typesEvents';
import CardEventSmall from './CardEventSmall';
import CardEventLarge from './CardEventLarge';
import Typographies from '../../../constants/Typographies';
import Colors from '../../../constants/Colors';

const CardEventList = ({ size, eventList, toggleJoinTeam }: CardEventListType) => {
    return (
        <View style={styles.container}>
            <FlatList
                scrollEnabled={false}
                contentContainerStyle={{ gap: 20 }}
                data={eventList}
                renderItem={({ item }) =>
                    size === 'S' ? (
                        <CardEventSmall event={item} toggleJoinTeam={toggleJoinTeam} />
                    ) : (
                        <CardEventLarge event={item} toggleJoinTeam={toggleJoinTeam} />
                    )
                }
            />
            {
                eventList.length === 0 ? <Text style={styles.text}>No events available</Text> : null
                // <Link href={'/'} style={styles.link}>
                //     <Text style={styles.text}>All events</Text>
                // </Link>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20
    },
    link: { textAlign: 'center' },
    text: { ...Typographies.h4, color: Colors.colors.colorAccentPurple }
});

export default CardEventList;
