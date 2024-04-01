import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
import ShareButtons from '../../../components/ShareButtons';

const CreateTeamConfirmation = () => {
    const teamName = 'Los Borrachos';
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Congratulations!</Text>
            <View style={styles.teamLink}>
                <Text style={styles.teamLinkTitle}>{teamName} was created succesfully</Text>
                <Link href={'/'} style={styles.teamLinkButton}>
                    <Text style={styles.teamLinkButtonText}>Go to your team</Text>
                </Link>
            </View>
            <ShareButtons />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 70
    },
    title: Typographies.h1,
    teamLink: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    teamLinkTitle: Typographies.h4,
    teamLinkButton: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.colors.colorAccentPurple,
        padding: 12,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        textAlign: 'center'
    },
    teamLinkButtonText: Typographies.buttonPrimary
});

export default CreateTeamConfirmation;
