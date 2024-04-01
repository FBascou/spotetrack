import { create } from 'zustand';
import { EventsPlayersType, EventsType } from '../types/typesEvents';
// import { apiSearch } from 'src/features/users/apis/apis';

type UseTeamsStoreType = {
    events: EventsType[];
    event: EventsType;
    addEvent: (event: EventsType) => void;
    removeEvent: (event: EventsType) => void;
    addPlayer: (player: EventsPlayersType) => void;
    removePlayer: (player: EventsPlayersType) => void;
    setParticipation: (event: EventsType) => void;
};

const eventsInitialValues: EventsType = {
    id: '',
    team_id: '',
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
    players: [],
    uri: '',
    createdAt: ''
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
                players: [...state.event.players, player]
            }
        })),
    removePlayer: (player) =>
        set((state) => ({
            event: {
                ...state.event,
                players: state.event.players.filter((i) => i.id !== player.id)
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
