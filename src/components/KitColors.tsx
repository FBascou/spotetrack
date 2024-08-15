import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Typographies from '../constants/Typographies';
import { KitColorType } from '../features/teams/types/typesTeams';

type KitColorsPropType = {
    kitColors: KitColorType[];
};

const KitColors = ({ kitColors }: KitColorsPropType) => {
    return (
        <View>
            {kitColors.length === 0 ? (
                <Text style={styles.groupText}>No kits available</Text>
            ) : (
                <View style={styles.groupKits}>
                    {kitColors.map((kit) => (
                        <View
                            key={kit.id}
                            style={[styles.groupKit, { backgroundColor: kit.color }]}></View>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        gap: 40
    },
    group: {
        gap: 20,
        paddingTop: 40,
        borderTopWidth: 1,
        borderTopColor: Colors.colors.colorTertiary
    },
    groupText: Typographies.h4,
    groupKits: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 40
    },
    groupKit: {
        flex: 1,
        height: 50,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 1
    }
});

export default KitColors;
