import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
import { checkAmountIsPlural } from '../../../utils/helpers';
import TeamList from './TeamList';
import FormJoinTeam from '../components/FormJoinTeam';
import { teamsTEST } from 'src/utils/dataTeams';
import { TeamType } from '../types/typesTeams';

type TabType = {
    id: number;
    name: string;
    placeholder: string;
    isTabActive: boolean;
};

const tabsDefaultValues: TabType[] = [
    { id: 0, name: 'Team Name', placeholder: 'Example: River Plate', isTabActive: true },
    { id: 1, name: 'Team Code', placeholder: 'Example: aD3as1Ss12', isTabActive: false }
];

const searchInputDefaultValues: string = '';

const JoinTeam = () => {
    const [tabs, setTabs] = useState<TabType[]>(tabsDefaultValues);
    const [placeholder, setPlaceholder] = useState(tabsDefaultValues[0]?.placeholder);
    const [searchInput, setSearchInput] = useState<string>(searchInputDefaultValues);
    const [teams, setTeams] = useState<TeamType[]>([]);

    const handleTabPress = (tabItem: TabType) => {
        const updatedTabs = tabs.map((tab) => {
            if (tab.id === tabItem.id) {
                setPlaceholder(tab.placeholder);
                return { ...tab, isTabActive: true };
            } else {
                return { ...tab, isTabActive: false };
            }
        });
        setTabs(updatedTabs);
    };

    const handleSearchInputChange = (input: string) => {
        setSearchInput(input);
    };

    const onSearchTeamPress = () => {
        const filteredTeams = teamsTEST.filter(
            (team) =>
                team.name.toLocaleLowerCase().startsWith(searchInput.toLocaleLowerCase()) ||
                team.code.startsWith(searchInput)
        );

        if (searchInput === '') {
            setTeams([]);
        } else {
            setTeams(filteredTeams);
        }

        setSearchInput('');
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <FormJoinTeam
                placeholder={placeholder}
                tabs={tabs}
                searchInput={searchInput}
                handleTabPress={handleTabPress}
                handleSearchInputChange={handleSearchInputChange}
                onSearchTeamPress={onSearchTeamPress}
            />
            <View style={styles.teams}>
                <Text style={styles.teamsFound}>
                    {checkAmountIsPlural(teams.length, 'team')} found
                </Text>
                <TeamList teamList={teams} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
    title: Typographies.h1,
    teams: {
        marginTop: 30,
        paddingVertical: 30,
        gap: 20,
        borderTopWidth: 1,
        borderTopColor: Colors.colors.colorTertiary
    },
    teamsFound: Typographies.h3
});

export default JoinTeam;
