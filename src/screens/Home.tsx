import { StyleSheet, View } from 'react-native';
import JoinCreateTeam from '../features/teams/screens/JoinCreateTeam';

const Home = () => {
    return (
        <View style={styles.container}>
            <JoinCreateTeam />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center'
    }
});

export default Home;
