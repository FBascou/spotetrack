import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
// import { UserType } from '../types/typesUsers';

const FormPrivacySchema = z.object({
    team_creators: z.boolean(),
    team_members: z.boolean()
});

type FormPrivacyType = z.infer<typeof FormPrivacySchema>;

// const accountTest: UserType = {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'asdasdasd@hotmail.com',
//     birth_date: '18/04/1985',
//     phone: '546512345',
//     // sports: [{ id: 0, name: 'Football' }],
//     id: 0,
//     shareContact: {
//         team_creators: false,
//         team_members: false
//     },
//     createdAt: '22/11/2023',
//     teams: [
//         { id: 1, name: 'sadsad' },
//         { id: 1, name: 'sadsad' },
//         { id: 1, name: 'sadsad' },
//         { id: 1, name: 'sadsad' },
//         { id: 1, name: 'sadsad' }
//     ],
//     events: []
// };

const FormPrivacy = () => {
    const formPrivacyDefaultValues: FormPrivacyType = {
        team_creators: false,
        team_members: false
    };

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormPrivacyType>({
        resolver: zodResolver(FormPrivacySchema),
        defaultValues: formPrivacyDefaultValues
    });

    const onSubmitPress: SubmitHandler<FormPrivacyType> = (data) => {
        console.warn(data);
    };

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                rowGap: 30
            }}>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Team Owners can contact me</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View
                            style={{
                                alignItems: 'flex-start',
                                paddingLeft: 15
                            }}>
                            <Switch
                                trackColor={{
                                    false: Colors.colors.colorAccentPink,
                                    true: Colors.colors.colorAccentBlue
                                }}
                                thumbColor={Colors.colors.colorSecondary}
                                // thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={(value) => onChange(value)}
                                value={value}
                                style={{ transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }] }}
                            />
                        </View>
                    )}
                    name={'team_creators'}
                />
                {errors?.team_creators?.message && (
                    <Text style={styles.formInputError}>
                        {errors?.team_creators?.message as string}
                    </Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Team Members can contact me</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View
                            style={{
                                alignItems: 'flex-start',
                                paddingLeft: 15
                            }}>
                            <Switch
                                trackColor={{
                                    false: Colors.colors.colorAccentPink,
                                    true: Colors.colors.colorAccentBlue
                                }}
                                thumbColor={Colors.colors.colorSecondary}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={(value) => onChange(value)}
                                value={value}
                                style={{ transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }] }}
                            />
                        </View>
                    )}
                    name={'team_members'}
                />
                {errors?.team_members?.message && (
                    <Text style={styles.formInputError}>
                        {errors?.team_members?.message as string}
                    </Text>
                )}
            </View>
            <View>
                <TouchableOpacity
                    style={[styles.formButton, { backgroundColor: Colors.colors.colorAccentPink }]}
                    onPress={() => reset(formPrivacyDefaultValues)}>
                    <Text style={styles.formButtonText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.formButton, { backgroundColor: Colors.colors.colorAccentBlue }]}
                    onPress={handleSubmit(onSubmitPress)}>
                    <Text style={styles.formButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
    title: Typographies.h1,
    formGroup: {
        gap: 10
    },
    formLabel: Typographies.h2,
    formInput: {
        height: 75,
        padding: 20,
        backgroundColor: Colors.colors.colorSecondary,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 1
    },
    formInputText: Typographies.inputText,
    formInputError: Typographies.importantText,
    formButton: {
        marginVertical: 15,
        alignItems: 'center',
        padding: 12,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1
    },
    formButtonText: Typographies.buttonPrimary
});

export default FormPrivacy;
