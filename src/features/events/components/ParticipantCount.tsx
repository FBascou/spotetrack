import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

type ParticipantCountPropType = {
    countYes: number;
    maybe?: number;
    countNo: number;
};

const ParticipantCount = ({ countYes, countNo }: ParticipantCountPropType) => {
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <FontAwesome
                    name="circle"
                    style={[styles.groupIcon, { color: Colors.colors.colorAccentPink }]}
                />
                <Text style={styles.groupText}>{countNo}</Text>
            </View>
            <View style={styles.group}>
                <FontAwesome
                    name="circle"
                    style={[styles.groupIcon, { color: Colors.colors.colorAccentBlue }]}
                />
                <Text style={styles.groupText}>{countYes}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5
    },
    groupIcon: {
        fontSize: 16
    },
    groupText: {
        fontSize: 18
    }
});

export default ParticipantCount;
