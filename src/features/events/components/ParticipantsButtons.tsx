import { StyleSheet, View } from 'react-native';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
import Button from '../../../components/Button';

type ParticipantsButtonsPropType = {
    pressYes: boolean;
    pressNo: boolean;
    onJoinEventPress: (choice: string) => void;
};

const ParticipantsButtons = ({
    pressYes,
    pressNo,
    onJoinEventPress
}: ParticipantsButtonsPropType) => {
    return (
        <View style={styles.group}>
            {pressYes === true ? null : (
                <Button
                    text={pressNo === false ? 'No' : 'Change'}
                    color={
                        pressNo === false
                            ? Colors.colors.colorAccentPink
                            : Colors.colors.colorTertiary
                    }
                    onPress={() => onJoinEventPress('NO')}
                />
            )}
            {pressNo === true ? null : (
                <Button
                    text={pressYes === false ? 'Yes' : 'Change'}
                    color={
                        pressYes === false
                            ? Colors.colors.colorAccentBlue
                            : Colors.colors.colorTertiary
                    }
                    onPress={() => onJoinEventPress('YES')}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20
    },
    text: Typographies.p
});

export default ParticipantsButtons;
