import { create } from 'zustand';
import { TeamType } from '../types/typesTeams';
import { UserType } from '../../users/types/typesUsers';
import { EventType } from '../../events/types/typesEvents';
// import { apiSearch } from 'src/features/users/apis/apis';

type UseTeamStoreType = {
    team: TeamType;
    members: UserType[];
    events: EventType[];
    addMember: (member: UserType) => void;
    removeMember: (member: UserType) => void;
    addEvent: (event: EventType) => void;
    removeEvent: (event: EventType) => void;
};

const teamsInitialValues: TeamType = {
    id: '',
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
                members: [...state.team.member_list, member]
            }
        })),
    removeMember: (member) =>
        set((state) => ({
            members: {
                ...state.members,
                members: state.team.member_list.filter((i) => i.id !== member.id)
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
