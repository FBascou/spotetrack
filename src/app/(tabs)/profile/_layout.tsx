import { Stack } from 'expo-router';

const ProfileLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Profile' }} />
            <Stack.Screen name="account" options={{ title: 'Account' }} />
            <Stack.Screen name="privacy" options={{ title: 'Privacy' }} />
        </Stack>
    );
};

export default ProfileLayout;
