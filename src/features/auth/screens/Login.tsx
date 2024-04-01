import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
// import { supabase } from '../../../config/initSupabase';
import Colors from '../../../constants/Colors';
import { Link } from 'expo-router';
import Title from '../../../components/Title';

const Login = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Sign in with email and password
    const onSignInPress = async (): Promise<void> => {
        setLoading(true);

        // const { error } = await supabase.auth.signInWithPassword({
        //     email,
        //     password
        // });

        // if (error !== null) Alert.alert(error.message);
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Spinner visible={loading} />
            <Title title="Log In" />
            <TextInput
                autoCapitalize="none"
                placeholder="john@doe.com"
                value={email}
                onChangeText={setEmail}
                style={styles.inputField}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.inputField}
            />
            <TouchableOpacity onPress={onSignInPress} style={styles.button}>
                <Text style={{ color: Colors.colors.colorSecondary }}>Sign in</Text>
            </TouchableOpacity>
            <View>
                <Text>Don't have an account?</Text>
                <Link href="/">
                    <Text>Register here</Text>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
        padding: 20,
        backgroundColor: Colors.colors.colorSecondary
    },
    inputField: {
        fontSize: 16,
        marginVertical: 4,
        height: 70,
        padding: 20,
        backgroundColor: Colors.colors.colorSecondary,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 1
    },
    button: {
        marginVertical: 15,
        alignItems: 'center',
        backgroundColor: Colors.colors.colorAccentPurple,
        padding: 12,
        borderRadius: 4,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1
    }
});

export default Login;
