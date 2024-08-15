import {
    StyleSheet,
    TextInput,
    Switch,
    Text,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import useTeamsStore from '../stores/useTeamsStore';
import { router } from 'expo-router';
import { TeamType } from '../types/typesTeams';

const sportList = [
    { id: 0, name: 'Any' },
    { id: 1, name: 'Football/Soccer' },
    { id: 2, name: 'Basketball' },
    { id: 3, name: 'Volleyball' },
    { id: 4, name: 'Tennis' },
    { id: 5, name: 'Golf' },
    { id: 6, name: 'Field Hockey' },
    { id: 7, name: 'Ice Hockey' },
    { id: 8, name: 'Combat (Boxing, MMA, Wrestling, etc.' },
    { id: 9, name: 'Board Games (Chess, Backgammon, Catan, etc.' },
    { id: 10, name: 'Badminton' },
    { id: 11, name: 'Cricket' },
    { id: 12, name: 'Rugby' },
    { id: 13, name: 'American Football/Flag Football' },
    { id: 14, name: 'Table Tennis/Ping Pong' },
    { id: 15, name: 'Baseball' },
    { id: 16, name: 'Handball' },
    { id: 17, name: 'Athletics' },
    { id: 18, name: 'Cycling' },
    { id: 19, name: 'Rollerblading' },
    { id: 20, name: 'Workout' },
    { id: 21, name: 'Swimming' }
];

const sportTypeList = [
    { id: 0, name: 'Recreational' },
    { id: 1, name: 'Competitive' }
];

const FormEditTeamSchema = z.object({
    name: z
        .string({
            required_error: 'Team name is mandatory',
            invalid_type_error: 'Team name must have at least 3 letters'
        })
        .min(3, 'Team name must have at least 3 letters')
        .max(30),
    sport: z.string(),
    type: z.string(),
    max_members: z.string().min(1, 'Team must have at least 1 member'),
    open_to_public: z.boolean(),
    open_to_guests: z.boolean()
});

// const CreateTeamFormSchemaOutput = z.object({
//     name: z.string().min(3).max(30),
//     sport: z.string(),
//     type: z.string(),
//     max_members: z
//         .string()
//         .min(1)
//         .transform((member) => parseInt(member)),
//     open_to_public: z.boolean(),
//     open_to_guests: z.boolean()
// });

type FormCreateAccountType = z.infer<typeof FormEditTeamSchema>;
// type CreateTeamFormTypeOutput = z.infer<typeof CreateTeamFormSchemaOutput>;

const FormEditTeam = () => {
    const { addTeam } = useTeamsStore();

    const formEditTeamDefaultValues: FormCreateAccountType = {
        name: '',
        sport: '',
        type: '',
        max_members: '',
        open_to_public: false,
        open_to_guests: false
    };

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormCreateAccountType>({
        resolver: zodResolver(FormEditTeamSchema),
        defaultValues: formEditTeamDefaultValues
    });

    const onSubmitPress: SubmitHandler<FormCreateAccountType> = (data) => {
        const intMaxMembers: number = parseInt(data.max_members);
        const isNanMaxMembers = isNaN(intMaxMembers);
        let team: TeamType = {
            ...data,
            max_members: intMaxMembers,
            id: 123543,
            kit_color_list: [],
            uri: 'asdasdqweqwewqdsad',
            team_owner_id: 123,
            team_owner: 'John Smith',
            member_list: [],
            event_list: [],
            code: 'daD!@#dsd',
            created_at: '12.05.1235'
        };

        if (isNanMaxMembers) {
            console.warn(data.max_members + 'IS NOT A NUMBER');
        } else {
            console.warn(data.max_members + 'IS A NUMBER');
        }

        console.warn(team);

        addTeam(team);

        router.push('/');
    };

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                rowGap: 30
            }}>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Team Name</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                placeholder={'Ex: River Plate'}
                                style={styles.formInputText}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                                maxLength={30}
                            />
                        </View>
                    )}
                    name={'name'}
                />
                {errors?.name?.message && (
                    <Text style={styles.formInputError}>{errors?.name?.message as string}</Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Sport</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formSelect}>
                            <Picker
                                onBlur={onBlur}
                                selectedValue={value}
                                onValueChange={(value) => onChange(value)}>
                                {sportList.map((sport) => (
                                    <Picker.Item
                                        key={sport.id}
                                        label={sport.name}
                                        value={sport.name.toLocaleLowerCase()}
                                        style={styles.formInputText}
                                    />
                                ))}
                            </Picker>
                        </View>
                    )}
                    name={'sport'}
                />
                {errors?.sport?.message && (
                    <Text style={styles.formInputError}>{errors?.sport?.message as string}</Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Team Type</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formSelect}>
                            <Picker
                                onBlur={onBlur}
                                selectedValue={value}
                                onValueChange={(value) => onChange(value)}>
                                {sportTypeList.map((sport) => (
                                    <Picker.Item
                                        key={sport.id}
                                        label={sport.name}
                                        value={sport.name.toLocaleLowerCase()}
                                        style={styles.formInputText}
                                    />
                                ))}
                            </Picker>
                        </View>
                    )}
                    name={'type'}
                />
                {errors?.type?.message && (
                    <Text style={styles.formInputError}>{errors?.type?.message as string}</Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Max. Members Allowed</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                inputMode="numeric"
                                keyboardType="numeric"
                                placeholder={'Maximum members allowed: 99'}
                                maxLength={2}
                                style={styles.formInputText}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        </View>
                    )}
                    name={'max_members'}
                />
                {errors?.max_members?.message && (
                    <Text style={styles.formInputError}>
                        {errors?.max_members?.message as string}
                    </Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Open To Public</Text>
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
                    name={'open_to_public'}
                />
                {errors?.open_to_public?.message && (
                    <Text style={styles.formInputError}>
                        {errors?.open_to_public?.message as string}
                    </Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Open To Guests</Text>
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
                    name={'open_to_guests'}
                />
                {errors?.open_to_guests?.message && (
                    <Text style={styles.formInputError}>
                        {errors?.open_to_guests?.message as string}
                    </Text>
                )}
            </View>
            <TouchableOpacity style={styles.formButton} onPress={handleSubmit(onSubmitPress)}>
                <Text style={styles.formButtonText}>Edit Team</Text>
            </TouchableOpacity>
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
    formSelect: {
        height: 75,
        padding: 10,
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
        backgroundColor: Colors.colors.colorAccentPurple,
        padding: 12,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1
    },
    formButtonText: Typographies.buttonPrimary
});

export default FormEditTeam;
