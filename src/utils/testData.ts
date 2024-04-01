import { UserType } from '../features/users/types/typesUsers';
import { EventType } from '../features/events/types/typesEvents';
import { TeamType } from '../features/teams/types/typesTeams';

export const user1TEST: UserType = {
    id: 123,
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith@sad.com',
    phone: '4655231564',
    sports: [{ id: 213, name: 'football' }],
    teams: [{ id: 12546, name: 'Los Borrachos Del Tablon' }],
    events: null,
    shareContact: {
        team_owners: true,
        team_members: false
    },
    createdAt: '12.05.1235',
    birth_date: ''
};

export const user2TEST: UserType = {
    id: 549,
    firstName: 'Felipe',
    lastName: 'Bascou',
    email: 'johnsmith@sad.com',
    phone: '4655231564',
    sports: [{ id: 213, name: 'football' }],
    teams: null,
    events: null,
    shareContact: {
        team_owners: true,
        team_members: true
    },
    createdAt: '12.05.1235',
    birth_date: ''
};

export const user3TEST: UserType = {
    id: 879,
    firstName: 'Juan',
    lastName: 'Locura',
    email: 'johnsmith@sad.com',
    phone: '4655231564',
    sports: [{ id: 213, name: 'football' }],
    teams: null,
    events: null,
    shareContact: {
        team_owners: false,
        team_members: true
    },
    createdAt: '12.05.1235',
    birth_date: ''
};

export const event1TEST: EventType = {
    id: '123',
    team_id: '12546',
    team_name: 'Los Borrachos',
    name: '18/05 Football 7 vs 7',
    description: 'This match will be done for the birthday of our dear friend, Emanuel Herrera',
    date: '18/05/2023',
    time: '18:30',
    location: 'San Nazzaro di Burgundi, 07, 45654, Lyon, Parma',
    max_players: 14,
    players_per_team: 7,
    open_to_guests: false,
    price: 7,
    kit_color_1: '',
    kit_color_2: '',
    kit_color_3: '',
    status: 'PENDING',
    participants_yes: 10,
    participants_maybe: 0,
    participants_no: 0,
    players: [],
    uri: 'qesad33324234234',
    createdAt: '05/05/2023'
};

export const event2TEST: EventType = {
    id: '456',
    team_id: '12546',
    team_name: 'Los Borrachos',
    name: '05/05 Football 5 vs 5',
    description: 'This match will be done for the birthday of our dear friend, Emanuel Herrera',
    date: '05/05/2023',
    time: '18:30',
    location: 'San Nazzaro di Burgundi, 07, 45654, Lyon, Parma',
    max_players: 15,
    players_per_team: 5,
    open_to_guests: false,
    price: 18,
    kit_color_1: '',
    kit_color_2: '',
    kit_color_3: '',
    status: 'CANCELLED',
    participants_yes: 0,
    participants_maybe: 0,
    participants_no: 0,
    players: [],
    uri: 'dsad8a7d9asd',
    createdAt: '01/05/2023'
};

export const event3TEST: EventType = {
    id: '789',
    team_id: '12546',
    team_name: 'Los Borrachos',
    name: '25/05 Football 5 vs 5',
    description: 'This match will be done for the birthday of our dear friend, Emanuel Herrera',
    date: '25/05/2023',
    time: '18:30',
    location: 'San Nazzaro di Burgundi, 07, 45654, Lyon, Parma',
    max_players: 15,
    players_per_team: 5,
    open_to_guests: true,
    price: 18,
    kit_color_1: '',
    kit_color_2: '',
    kit_color_3: '',
    status: 'ENDED',
    participants_yes: 0,
    participants_maybe: 0,
    participants_no: 0,
    players: [],
    uri: 'sadqwewqe',
    createdAt: '18/05/2023'
};

export const event4TEST: EventType = {
    id: '963',
    team_id: '12546',
    team_name: 'Kun Aguero',
    name: '18/06 Football 11 vs 11',
    description: 'This match will be done for the birthday of our dear friend, Emanuel Herrera',
    date: '05/06/2023',
    time: '18:30',
    location: 'San Nazzaro di Burgundi, 07, 45654, Lyon, Parma',
    max_players: 32,
    players_per_team: 11,
    open_to_guests: false,
    price: 7,
    kit_color_1: '',
    kit_color_2: '',
    kit_color_3: '',
    status: 'CONFIRMED',
    participants_yes: 0,
    participants_maybe: 0,
    participants_no: 0,
    players: [],
    uri: 'qesad33324234234',
    createdAt: '15/05/2023'
};

export const event5TEST: EventType = {
    id: '45636',
    team_id: '12546',
    team_name: 'Ferrari',
    name: '28/06 Football 7 vs 7',
    description: 'This match will be done for the birthday of our dear friend, Emanuel Herrera',
    date: '27/06/2023',
    time: '18:30',
    location: 'San Nazzaro di Burgundi, 07, 45654, Lyon, Parma',
    max_players: 14,
    players_per_team: 7,
    open_to_guests: true,
    price: 1321564,
    kit_color_1: '',
    kit_color_2: '',
    kit_color_3: '',
    status: 'PENDING',
    participants_yes: 10,
    participants_maybe: 0,
    participants_no: 20,
    players: [],
    uri: 'qesad33324234234',
    createdAt: '15/05/2023'
};

export const eventsTEST: EventType[] = [event1TEST, event2TEST, event3TEST, event4TEST, event5TEST];

export const teamTEST1: TeamType = {
    name: 'Los Borrachos Del Tablon',
    sport: 'Football',
    type: 'Recreational',
    open_to_public: false,
    open_to_guests: false,
    max_members: 45,
    id: '12546',
    kit_colors: [
        { id: 0, color: '#ffff', type: 'HOME' },
        { id: 1, color: '#e3e3e3', type: 'AWAY' },
        { id: 2, color: 'red', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 123,
    team_owner: 'John Smith',
    members: [user1TEST, user2TEST, user3TEST],
    events: [event1TEST, event2TEST, event3TEST, event4TEST],
    code: 'daD!@#dsd',
    createdAt: '12.05.1235'
};

export const teamTEST2: TeamType = {
    name: 'Alfa Romeo',
    sport: 'Football',
    type: 'Recreational',
    open_to_public: true,
    open_to_guests: true,
    max_members: 45,
    id: '45678',
    kit_colors: [
        { id: 0, color: 'green', type: 'HOME' },
        { id: 5, color: 'red', type: 'AWAY' },
        { id: 1, color: 'pink', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 1234,
    team_owner: 'JonSlow',
    members: [user1TEST, user2TEST, user3TEST],
    events: [],
    code: 'daD!@#dsd',
    createdAt: '12.05.1235'
};

export const teamTEST3: TeamType = {
    name: 'La Vieja Escuela',
    sport: 'Tennis',
    type: 'Recreational',
    open_to_public: false,
    open_to_guests: false,
    max_members: 99,
    id: '1589',
    kit_colors: [
        { id: 0, color: 'yellow', type: 'HOME' },
        { id: 1, color: 'blue', type: 'AWAY' },
        { id: 2, color: 'red', type: 'THIRD' }
    ],
    uri: 'asdasdqwe',
    team_owner_id: 5343123,
    team_owner: 'John NotSmith',
    members: [user1TEST, user2TEST, user3TEST],
    events: [event1TEST, event2TEST, event3TEST, event4TEST],
    code: 'daD!@#dsd',
    createdAt: '12.05.1235'
};

export const teamTEST4: TeamType = {
    name: 'Ching Chong',
    sport: 'Football',
    type: 'Recreational',
    open_to_public: false,
    open_to_guests: true,
    max_members: 45,
    id: '69669',
    kit_colors: [
        { id: 0, color: 'blue', type: 'HOME' },
        { id: 5, color: 'pink', type: 'AWAY' },
        { id: 1, color: 'green', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 478,
    team_owner: 'JonSlow',
    members: [user1TEST, user2TEST, user3TEST],
    events: [],
    code: 'daD!@#dsd',
    createdAt: '12.05.1235'
};

export const teamTEST5: TeamType = {
    name: 'River Plate',
    sport: 'Basketball',
    type: 'Recreational',
    open_to_public: true,
    open_to_guests: true,
    max_members: 45,
    id: '879546',
    kit_colors: [
        { id: 0, color: 'green', type: 'HOME' },
        { id: 5, color: 'red', type: 'AWAY' },
        { id: 1, color: 'yellow', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 4783,
    team_owner: 'Viper',
    members: [user1TEST, user2TEST, user3TEST],
    events: [],
    code: 'daD!@#dsd',
    createdAt: '12.05.1235'
};

export const teamTEST6: TeamType = {
    name: 'Toyota Hilux',
    sport: 'Football',
    type: 'Recreational',
    open_to_public: true,
    open_to_guests: true,
    max_members: 45,
    id: 'qwesad123',
    kit_colors: [
        { id: 0, color: 'blue', type: 'HOME' },
        { id: 5, color: 'white', type: 'AWAY' },
        { id: 1, color: 'black', type: 'THIRD' }
    ],
    uri: 'asdasdqweqwewqdsad',
    team_owner_id: 4788,
    team_owner: 'Jonas',
    members: [user1TEST],
    events: [event1TEST],
    code: 'daD!@#dsd',
    createdAt: '12.05.1235'
};

export const teamsTEST: TeamType[] = [
    teamTEST1,
    teamTEST2,
    teamTEST3,
    teamTEST4,
    teamTEST5,
    teamTEST6
];
