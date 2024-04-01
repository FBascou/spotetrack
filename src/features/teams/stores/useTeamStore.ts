import { create } from 'zustand';
import { TeamsType } from '../types/typesTeams';
import { UsersType } from '../../users/types/typesUsers';
import { EventsType } from '../../events/types/typesEvents';
// import { apiSearch } from 'src/features/users/apis/apis';

type UseTeamStoreType = {
    team: TeamsType;
    members: UsersType[];
    events: EventsType[];
    addMember: (member: UsersType) => void;
    removeMember: (member: UsersType) => void;
    addEvent: (event: EventsType) => void;
    removeEvent: (event: EventsType) => void;
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

const useTeamsStore = create<UseTeamStoreType>()((set) => ({
    team: teamsInitialValues,
    members: [],
    events: [],
    addMember: (member) =>
        set((state) => ({
            members: {
                ...state.members,
                members: [...state.team.members, member]
            }
        })),
    removeMember: (member) =>
        set((state) => ({
            members: {
                ...state.members,
                members: state.team.members.filter((i) => i.id !== member.id)
            }
        })),
    addEvent: (event) =>
        set((state) => ({
            events: [...state.events, event]
        })),
    removeEvent: (event) =>
        set((state) => ({
            events: state.events.filter((i) => i.id !== event.id)
        }))
}));

export default useTeamsStore;
