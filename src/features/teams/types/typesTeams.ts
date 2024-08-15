import { EventType } from '../../events/types/typesEvents';
import { UserType } from '../../users/types/typesUsers';

//https://www.youtube.com/watch?v=xsfdypZCLQ8

export type TeamsShareType = {
    public: boolean;
    members: boolean;
};

export type KitColorType = { id: number; color: string; type: 'HOME' | 'AWAY' | 'THIRD' };

export type KitColorsType = {
    [key: string]: KitColorType;
};

export type TeamSportType = {
    id: number;
    sport: string;
};

export type TeamType = {
    id: null | number;
    code: string;
    team_owner_id: null | number;
    team_owner: string;
    name: string;
    sport: string;
    type: string;
    max_members: number;
    open_to_public: boolean;
    open_to_guests: boolean;
    kit_color_list?: KitColorType[];
    uri: string;
    member_list: UserType[];
    event_list: EventType[];
    created_at: string;
};
