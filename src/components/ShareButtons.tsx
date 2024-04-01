import { StyleSheet, Text, View, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import Typographies from '../constants/Typographies';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type ShareButtonsType = {
    id: number;
    title: string;
    name: 'link' | 'copy' | 'whatsapp' | 'facebook' | 'instagram' | undefined;
    url?: string;
};

const shareButtonList: ShareButtonsType[] = [
    { id: 0, title: 'Link', name: 'link', url: '' },
    { id: 1, title: 'Copy', name: 'copy', url: '' },
    { id: 2, title: 'Whatsapp', name: 'whatsapp', url: '' },
    { id: 3, title: 'Facebook', name: 'facebook', url: '' },
    { id: 4, title: 'Instagram', name: 'instagram', url: '' }
];

const ShareButtons = () => {
    const onShareButtonPress = () => {
        console.warn('Press');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Invite your friends!</Text>
            <View style={styles.shareButtons}>
                {shareButtonList.map((button) => (
                    <Pressable
                        key={button.id}
                        style={styles.shareButtonGroup}
                        onPress={onShareButtonPress}>
                        <FontAwesome name={button.name} style={styles.shareButtonIcon} />
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    title: Typographies.h4,
    shareButtons: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    shareButtonGroup: {
        width: 55,
        height: 55,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.colors.colorSecondary,
        padding: 10,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1
    },
    shareButtonIcon: {
        fontSize: 30,
        color: Colors.colors.colorAccentPurple
    }
});

export default ShareButtons;
