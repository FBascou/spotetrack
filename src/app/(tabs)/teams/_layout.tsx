import { Stack } from 'expo-router';

const TeamLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Teams' }} />
            <Stack.Screen
                name="modal"
                options={{
                    presentation: 'modal',
                    title: 'Edit Team'
                }}
            />
        </Stack>
    );
};

export default TeamLayout;
