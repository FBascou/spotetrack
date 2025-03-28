import { EventType } from '../../../features/events/types/typesEvents';
import { TeamType } from '../../../features/teams/types/typesTeams';

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

export type UserType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    birth_date: string;
    phone: string;
    sport_list: UserSportsType[];
    team_list: TeamType[];
    event_list: EventType[];
    share_contact: UserShareContactType;
    created_at: string;
};
