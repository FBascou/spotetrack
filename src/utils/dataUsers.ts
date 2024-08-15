import { UserType } from '../features/users/types/typesUsers';
import { teamsTEST, teamTEST1 } from './dataTeams';

export const user1TEST: UserType = {
    id: 123,
    first_name: 'John',
    last_name: 'Smith',
    email: 'johnsmith@sad.com',
    phone: '4655231564',
    sport_list: [{ id: 213, name: 'football' }],
    team_list: [teamTEST1],
    event_list: null,
    share_contact: {
        team_owners: true,
        team_members: false
    },
    created_at: '12.05.1235',
    birth_date: ''
};

export const user2TEST: UserType = {
    id: 549,
    first_name: 'Felipe',
    last_name: 'Bascou',
    email: 'johnsmith@sad.com',
    phone: '4655231564',
    sport_list: [{ id: 213, name: 'football' }],
    team_list: null,
    event_list: null,
    share_contact: {
        team_owners: true,
        team_members: true
    },
    created_at: '12.05.1235',
    birth_date: ''
};

export const user3TEST: UserType = {
    id: 879,
    first_name: 'Juan',
    last_name: 'Locura',
    email: 'johnsmith@sad.com',
    phone: '4655231564',
    sport_list: [{ id: 213, name: 'football' }],
    team_list: null,
    event_list: null,
    share_contact: {
        team_owners: false,
        team_members: true
    },
    created_at: '12.05.1235',
    birth_date: ''
};

export const userMainTEST: UserType = {
    id: 0,
    first_name: 'John',
    last_name: 'Smith',
    email: 'johnsmith@sad.com',
    phone: '4655231564',
    sport_list: [{ id: 213, name: 'football' }],
    team_list: teamsTEST,
    event_list: [],
    share_contact: {
        team_owners: true,
        team_members: false
    },
    created_at: '12.05.1235',
    birth_date: ''
};
