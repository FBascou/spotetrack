import { UserType } from 'src/features/users/types/typesUsers';

//https://www.youtube.com/watch?v=xsfdypZCLQ8

// type EventPlayerParticipationNoType = { status: 'NO' };
// type EventPlayerParticipationMaybeType = { status: 'MAYBE' };
// type EventPlayerParticipationYesType = { status: 'YES' };

export type EventPlayerParticipationType = {};

export type EventPlayerType = {
    id: string;
    member: UserType;
    will_participate: 'NO' | 'MAYBE' | 'YES';
    guests: number;
};

export type EventType = {
    id: string;
    team_id: string;
    team_name: string;
    name: string;
    description?: string;
    date: string;
    time: string;
    location: string;
    max_players: number;
    players_per_team: number;
    open_to_guests: boolean;
    price: number;
    kit_color_1: string;
    kit_color_2: string;
    kit_color_3: string;
    status: 'PENDING' | 'CANCELLED' | 'CONFIRMED' | 'ENDED';
    participants_yes: number;
    participants_maybe: number;
    participants_no: number;
    player_list: EventPlayerType[];
    uri: string;
    createdAt: string;
};

export type CardEventListType = {
    eventList: EventType[];
    toggleJoinTeam: boolean;
    size: 'S' | 'L';
};
