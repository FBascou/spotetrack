import { create } from 'zustand';
import { TeamsType } from '../types/typesTeams';
import { teamsTEST } from '../../../utils/testData';

type UseTeamsStoreType = {
    teams: TeamsType[];
    team: TeamsType;
    addTeam: (team: TeamsType) => void;
    removeTeam: (team: TeamsType) => void;
};

const teamsInitialValues: TeamsType = {
    id: '',
    code: '',
    team_creator_id: '',
    team_creator: '',
    name: '',
    sport: '',
    type: '',
    max_members: 0,
    open_to_public: false,
    open_to_guests: false,
    kit_colors: [],
    uri: '',
    members: [],
    events: [],
    createdAt: ''
};

const useTeamsStore = create<UseTeamsStoreType>()((set) => ({
    teams: teamsTEST,
    team: teamsInitialValues,
    addTeam: (team) =>
        set((state) => ({
            teams: [...state.teams, team]
        })),
    removeTeam: (team) =>
        set((state) => ({
            teams: state.teams.filter((i) => i.id !== team.id)
        }))
}));

export default useTeamsStore;
