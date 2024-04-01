import { StyleSheet, View } from 'react-native';
import Button from '../../../components/Button';
import Colors from '../../../constants/Colors';
import FormEditTeam from '../components/FormEditTeam';

const ModalEdit = () => {
    return (
        <View style={styles.container}>
            {/* <Button text={'Edit Team'} color={Colors.colors.colorSecondary} onPress={() => {}} /> */}
            <FormEditTeam />
        </View>
    );
};

export default ModalEdit;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 20
    }
});
