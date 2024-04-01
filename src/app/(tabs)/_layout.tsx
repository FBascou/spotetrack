import { Octicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}): JSX.Element {
    return <FontAwesome size={26} style={{ marginBottom: 0 }} {...props} />;
}

export default function TabLayout(): JSX.Element {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: 'Spotetrack',
                    headerTitleAlign: 'center',
                    title: '',
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color }) => (
                        <Octicons name="diff-added" size={38} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="events"
                options={{
                    title: 'Events',
                    tabBarLabel: 'Events',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />
                }}
            />
            <Tabs.Screen
                name="teams"
                options={{
                    title: 'Teams',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="group" color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />
                }}
            />
        </Tabs>
    );
}
