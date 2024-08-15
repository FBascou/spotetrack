import { create } from 'zustand';
import { TeamType } from '../types/typesTeams';
import { teamsTEST } from '../../../utils/dataTeams';

type UseTeamsStoreType = {
    teams: TeamType[];
    team: TeamType;
    addTeam: (team: TeamType) => void;
    removeTeam: (team: TeamType) => void;
};

const teamsInitialValues: TeamType = {
    id: null,
    code: '',
    team_owner_id: null,
    team_owner: '',
    name: '',
    sport: '',
    type: '',
    max_members: 0,
    open_to_public: false,
    open_to_guests: false,
    kit_color_list: [],
    uri: '',
    member_list: [],
    event_list: [],
    created_at: ''
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
