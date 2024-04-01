import { StyleSheet, View } from 'react-native';
import ModalEdit from '../../../features/teams/screens/ModalEdit';

export default function TeamEditModalScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <ModalEdit />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center'
    }
});
