import { create } from 'zustand';
import { EventPlayerType, EventType } from '../types/typesEvents';
// import { apiSearch } from 'src/features/users/apis/apis';

type UseTeamsStoreType = {
    events: EventType[];
    event: EventType;
    addEvent: (event: EventType) => void;
    removeEvent: (event: EventType) => void;
    addPlayer: (player: EventPlayerType) => void;
    removePlayer: (player: EventPlayerType) => void;
    setParticipation: (event: EventType) => void;
};

const eventsInitialValues: EventType = {
    id: null,
    team_id: null,
    team_name: '',
    name: '',
    description: '',
    date: '',
    time: '',
    location: '',
    max_players: 0,
    players_per_team: 0,
    open_to_guests: false,
    price: 0,
    kit_color_1: '',
    kit_color_2: '',
    kit_color_3: '',
    status: 'PENDING',
    participants_yes: 0,
    participants_maybe: 0,
    participants_no: 0,
    player_list: [],
    uri: '',
    created_at: ''
};

// setParticipation: when member clicks on Participation button (yes, maybe, no):
// find member id, and if member id matches current user id, then add/remove member/user to players
// change participation button to yes, maybe, no - whatever the member clicked on
// add or remove 1 to participants_yes, maybe, no

const useSearchStore = create<UseTeamsStoreType>()((set) => ({
    events: [],
    event: eventsInitialValues,
    addEvent: (event) =>
        set((state) => ({
            events: [...state.events, event]
        })),
    removeEvent: (event) =>
        set((state) => ({
            events: state.events.filter((i) => i.id !== event.id)
        })),
    addPlayer: (player) =>
        set((state) => ({
            event: {
                ...state.event,
                players: [...state.event.player_list, player]
            }
        })),
    removePlayer: (player) =>
        set((state) => ({
            event: {
                ...state.event,
                players: state.event.player_list.filter((i) => i.id !== player.id)
            }
        })),
    setParticipation: (event) =>
        set((state) => ({
            event: {
                ...state.event,
                participants_yes: event.participants_yes + 1
            }
        }))
}));

export default useSearchStore;
