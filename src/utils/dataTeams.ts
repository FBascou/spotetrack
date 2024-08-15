import { TeamType } from '../features/teams/types/typesTeams';
import { user1TEST, user2TEST, user3TEST } from './dataUsers';
import { event1TEST, event2TEST, event3TEST, event4TEST } from './dataEvents';

export const teamTEST1: TeamType = {
    name: 'Los Borrachos Del Tablon',
    sport: 'Football',
    type: 'Recreational',
    open_to_public: false,
    open_to_guests: false,
    max_members: 45,
    id: 0,
    kit_color_list: [
        { id: 0, color: '#ffff', type: 'HOME' },
        { id: 1, color: '#e3e3e3', type: 'AWAY' },
        { id: 2, color: 'red', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 123,
    team_owner: 'John Smith',
    member_list: [user1TEST, user2TEST, user3TEST],
    event_list: [event1TEST, event2TEST, event3TEST, event4TEST],
    code: 'daD!@#dsd',
    created_at: '12.05.1235'
};

export const teamTEST2: TeamType = {
    name: 'Alfa Romeo',
    sport: 'Football',
    type: 'Recreational',
    open_to_public: true,
    open_to_guests: true,
    max_members: 45,
    id: 1,
    kit_color_list: [
        { id: 0, color: 'green', type: 'HOME' },
        { id: 5, color: 'red', type: 'AWAY' },
        { id: 1, color: 'pink', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 1234,
    team_owner: 'JonSlow',
    member_list: [user1TEST, user2TEST, user3TEST],
    event_list: [],
    code: 'daD!@#dsd',
    created_at: '12.05.1235'
};

export const teamTEST3: TeamType = {
    name: 'La Vieja Escuela',
    sport: 'Tennis',
    type: 'Recreational',
    open_to_public: false,
    open_to_guests: false,
    max_members: 99,
    id: 2,
    kit_color_list: [
        { id: 0, color: 'yellow', type: 'HOME' },
        { id: 1, color: 'blue', type: 'AWAY' },
        { id: 2, color: 'red', type: 'THIRD' }
    ],
    uri: 'asdasdqwe',
    team_owner_id: 5343123,
    team_owner: 'John NotSmith',
    member_list: [user1TEST, user2TEST, user3TEST],
    event_list: [event1TEST, event2TEST, event3TEST, event4TEST],
    code: 'daD!@#dsd',
    created_at: '12.05.1235'
};

export const teamTEST4: TeamType = {
    name: 'Ching Chong',
    sport: 'Football',
    type: 'Recreational',
    open_to_public: false,
    open_to_guests: true,
    max_members: 45,
    id: 3,
    kit_color_list: [
        { id: 0, color: 'blue', type: 'HOME' },
        { id: 5, color: 'pink', type: 'AWAY' },
        { id: 1, color: 'green', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 478,
    team_owner: 'JonSlow',
    member_list: [user1TEST, user2TEST, user3TEST],
    event_list: [],
    code: 'daD!@#dsd',
    created_at: '12.05.1235'
};

export const teamTEST5: TeamType = {
    name: 'River Plate',
    sport: 'Basketball',
    type: 'Recreational',
    open_to_public: true,
    open_to_guests: true,
    max_members: 45,
    id: 4,
    kit_color_list: [
        { id: 0, color: 'green', type: 'HOME' },
        { id: 5, color: 'red', type: 'AWAY' },
        { id: 1, color: 'yellow', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 4783,
    team_owner: 'Viper',
    member_list: [user1TEST, user2TEST, user3TEST],
    event_list: [],
    code: 'daD!@#dsd',
    created_at: '12.05.1235'
};

export const teamTEST6: TeamType = {
    name: 'Toyota Hilux',
    sport: 'Football',
    type: 'Recreational',
    open_to_public: true,
    open_to_guests: true,
    max_members: 45,
    id: 5,
    kit_color_list: [
        { id: 0, color: 'blue', type: 'HOME' },
        { id: 5, color: 'white', type: 'AWAY' },
        { id: 1, color: 'black', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 4788,
    team_owner: 'Jonas',
    member_list: [user1TEST],
    event_list: [event1TEST],
    code: 'daD!@#dsd',
    created_at: '12.05.1235'
};

export const teamsTEST: TeamType[] = [
    teamTEST1,
    teamTEST2,
    teamTEST3,
    teamTEST4,
    teamTEST5,
    teamTEST6
];
