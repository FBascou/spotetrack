import { EventType } from '../../../features/events/types/typesEvents';
import { UserType } from '../../../features/users/types/typesUsers';

//https://www.youtube.com/watch?v=xsfdypZCLQ8

export type TeamsShareType = {
    public: boolean;
    members: boolean;
};

export type TeamKitColorType = { id: number; color: string; type: 'HOME' | 'AWAY' | 'THIRD' };

export type KitColorsType = {
    [key: string]: TeamKitColorType;
};

export type TeamSportType = {
    id: number;
    sport: string;
};

export type TeamType = {
    id: string;
    code: string;
    team_owner_id: number;
    team_owner: string;
    name: string;
    sport: string;
    type: string;
    max_members: number;
    open_to_public: boolean;
    open_to_guests: boolean;
    kit_color_list: TeamKitColorType[];
    uri: string;
    member_list: UserType[];
    event_list: EventType[];
    createdAt: string;
};
