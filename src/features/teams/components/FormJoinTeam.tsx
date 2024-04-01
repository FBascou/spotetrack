import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';

type TabType = {
    id: number;
    name: string;
    placeholder: string;
    isTabActive: boolean;
};

type FormJoinTeamPropType = {
    placeholder: string | undefined;
    tabs: TabType[];
    searchInput: string;
    handleTabPress: (tabItem: TabType) => void;
    handleSearchInputChange: (input: string) => void;
    onSearchTeamPress: () => void;
};

const FormJoinTeam = ({
    placeholder,
    tabs,
    searchInput,
    handleTabPress,
    handleSearchInputChange,
    onSearchTeamPress
}: FormJoinTeamPropType) => {
    return (
        <View>
            <View style={styles.tabGroup}>
                {tabs.map((tab) => (
                    <Pressable
                        key={tab.id}
                        onPress={() => handleTabPress(tab)}
                        style={[styles.tabButton, tab.isTabActive ? styles.tabButtonActive : null]}>
                        <Text style={tab.isTabActive ? styles.tabTextActive : styles.tabText}>
                            {tab.name}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <View style={styles.formGroup}>
                <View style={styles.formInput}>
                    <TextInput
                        placeholder={placeholder}
                        style={styles.formInputText}
                        onChangeText={(input) => handleSearchInputChange(input)}
                        defaultValue={searchInput}
                    />
                </View>
                <TouchableOpacity style={styles.formButton} onPress={onSearchTeamPress}>
                    <Text style={styles.formButtonText}>Search Team</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tabGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30
    },
    tabButton: {
        padding: 20
    },
    tabText: Typographies.h2Secondary,
    tabButtonActive: {},
    tabTextActive: Typographies.h2,
    formGroup: {
        gap: 10
    },
    formInput: {
        marginVertical: 4,
        padding: 20,
        backgroundColor: Colors.colors.colorSecondary,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 1
    },
    formInputText: Typographies.inputText,
    formButton: {
        marginVertical: 15,
        alignItems: 'center',
        backgroundColor: Colors.colors.colorAccentPurple,
        padding: 12,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1
    },
    formButtonText: Typographies.buttonPrimary
});

export default FormJoinTeam;
