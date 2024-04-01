import { Stack } from 'expo-router';

const EventLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Events' }} />
            {/* <Stack.Screen name="events/[eventId]" options={{ title: 'Event' }} /> */}
        </Stack>
    );
};

export default EventLayout;
