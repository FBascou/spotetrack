import { StyleSheet, View } from 'react-native';
import CardProfile from '../components/CardProfile';

const profileCardArray = [
    { id: 0, name: 'account' },
    { id: 1, name: 'privacy' },
    { id: 2, name: 'notifications' }
];

const CardProfileList = () => {
    return (
        <View style={styles.container}>
            {profileCardArray.map((profile) => (
                <CardProfile key={profile.id} name={profile.name} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20
    }
});

export default CardProfileList;
