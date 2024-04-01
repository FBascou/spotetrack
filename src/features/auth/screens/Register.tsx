import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
// import { supabase } from '../../../config/initSupabase';
import Colors from '../../../constants/Colors';
import { Link } from 'expo-router';
import Title from '../../../components/Title';

const Register = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Create a new user
    const onSignUpPress = async (): Promise<void> => {
        setLoading(true);

        if (confirmPassword === password) {
            Alert.alert('Passwords do not match');
            setLoading(false);
        }

        // const { error } = await supabase.auth.signUp({
        //     email,
        //     password
        // });

        // if (error !== null) {
        //     Alert.alert(error.message);
        // }
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Spinner visible={loading} />
            <Title title="Register" />
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
            <TextInput
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.inputField}
            />
            <TouchableOpacity onPress={onSignUpPress} style={styles.button}>
                <Text style={{ color: Colors.colors.colorSecondary }}>Create Account</Text>
            </TouchableOpacity>
            <View>
                <Text>Already have an account?</Text>
                <Link href="/">
                    <Text>Log in here</Text>
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

export default Register;
