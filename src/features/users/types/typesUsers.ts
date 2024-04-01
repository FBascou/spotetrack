import { EventType } from '@/features/events/types/typesEvents';
// import { TeamsType } from 'src/features/teams/types/typesTeams';

export type UserSportsType = {
    id: number;
    name: string;
    icon?: SVGElement;
};

export type UserShareContactType = {
    everyone?: boolean;
    team_owners: boolean;
    team_members: boolean;
};

type TeamTestType = {
    id: number;
    name: string;
};

export type UserType = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birth_date: string;
    phone: string;
    sports: UserSportsType[];
    teams?: null | TeamTestType[];
    events?: null | EventType[];
    shareContact: UserShareContactType;
    createdAt: string;
};
