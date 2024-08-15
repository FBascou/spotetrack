import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Redirect } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import useAuthStore from '../features/auth/stores/useAuthStore';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary
} from 'expo-router';

export const unstableSettings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)'
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout(): JSX.Element | null {
    const [loaded, error] = useFonts({
        SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error !== null) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav(): JSX.Element {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                {/* <Stack.Screen name="(auth)/index" options={{ headerShown: false }} /> */}
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="createteam" options={{ title: 'Create Team' }} />
                <Stack.Screen name="jointeam" options={{ title: 'Join Team' }} />
                <Stack.Screen name="login" options={{ title: 'Login' }} />
                {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
            </Stack>
        </ThemeProvider>
    );
}
