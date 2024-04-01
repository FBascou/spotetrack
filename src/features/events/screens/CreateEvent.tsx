import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View
} from 'react-native';
import { z } from 'zod';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
// import useEventsStore from '../stores/useEventsStore';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../../components/Button';

const CreateEventFormSchema = z.object({
    // description: z.string().min(1).max(60).optional(),
    date: z.date({ invalid_type_error: 'Please, enter a valid date' }),
    time: z.date({ invalid_type_error: 'Please, enter a valid time' }),
    location: z.string().min(1),
    max_players: z.string().min(1, 'Event must have at least 2 players'),
    players_per_team: z.string().min(1, 'Team must have at least 1 player'),
    open_to_guests: z.boolean(),
    price: z.string().min(1, 'Must write a number. Write 0 if the event is free')
});

type CreateEventFormType = z.infer<typeof CreateEventFormSchema>;

const createEventFormDefaultValues: DefaultValues<CreateEventFormType> = {
    // description: '',
    date: new Date(),
    time: new Date(),
    location: '',
    max_players: '',
    players_per_team: '',
    open_to_guests: false,
    price: ''
};

// Date and Time fields dont get error when empty or modified

const CreateEvent = () => {
    // const { addEvent } = useEventsStore();
    const [mode, setMode] = useState('date' as const);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState(createEventFormDefaultValues);

    const {
        control,
        handleSubmit,
        formState: { errors, dirtyFields }
    } = useForm<CreateEventFormType>({
        resolver: zodResolver(CreateEventFormSchema),
        defaultValues: createEventFormDefaultValues
    });

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const onSubmitPress: SubmitHandler<CreateEventFormType> = (data) => {
        console.warn(data);
        setFormData((prev) => ({ ...prev, ...data }));
        // let event: EventsType = {
        //     ...data,
        //     date: '',
        //     max_players: 0,
        //     players_per_team: 0,
        //     price: 0,
        //     id: '',
        //     team_id: '',
        //     team_name: '',
        //     name: '',
        //     kit_color_1: '',
        //     kit_color_2: '',
        //     kit_color_3: '',
        //     status: 'PENDING',
        //     participants_yes: 0,
        //     participants_maybe: 0,
        //     participants_no: 0,
        //     players: [],
        //     uri: '',
        //     createdAt: ''
        // };
        // addEvent(event);
    };

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                rowGap: 30
            }}>
            <Text style={styles.title}>Create Event</Text>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Date</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <SafeAreaView style={styles.formInput}>
                            <Pressable onPress={() => showMode('date')}>
                                <Text
                                    style={
                                        dirtyFields.date
                                            ? styles.formInputText
                                            : styles.formInputPlaceholder
                                    }>
                                    {dirtyFields.date
                                        ? value?.toLocaleDateString('it-IT')
                                        : 'Select Date'}
                                </Text>
                            </Pressable>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={value}
                                    mode={mode}
                                    is24Hour={true}
                                    onChange={(_, value) => {
                                        setShow(false);
                                        onChange(value);
                                        console.warn('WARN VALUE', value);
                                    }}
                                    minimumDate={new Date()}
                                />
                            )}
                        </SafeAreaView>
                    )}
                    name={'date'}
                />
                {errors?.date?.message && (
                    <Text style={styles.formInputError}>{errors?.date?.message as string}</Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Time</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <SafeAreaView style={styles.formInput}>
                            <Pressable onPress={() => showMode('time')}>
                                <Text
                                    style={
                                        dirtyFields.time
                                            ? styles.formInputText
                                            : styles.formInputPlaceholder
                                    }>
                                    {dirtyFields.time
                                        ? value?.toLocaleTimeString([], {
                                              hour: '2-digit',
                                              minute: '2-digit',
                                              hour12: false
                                          })
                                        : 'Select Time'}
                                </Text>
                            </Pressable>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={value}
                                    mode={mode}
                                    is24Hour={true}
                                    onChange={(_, value) => {
                                        setShow(false);
                                        console.warn('WARN VALUE', value);
                                        onChange(value);
                                    }}
                                />
                            )}
                        </SafeAreaView>
                    )}
                    name={'time'}
                />
                {errors?.time?.message && (
                    <Text style={styles.formInputError}>{errors?.time?.message as string}</Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Location</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                placeholder={'San Pancrazio'}
                                style={styles.formInputText}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        </View>
                    )}
                    name={'location'}
                />
                {errors?.location?.message && (
                    <Text style={styles.formInputError}>{errors?.location?.message as string}</Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Price per Person</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                inputMode="decimal"
                                keyboardType="decimal-pad"
                                placeholder={'How much is the price to play?'}
                                style={styles.formInputText}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        </View>
                    )}
                    name={'price'}
                />
                {errors?.price?.message && (
                    <Text style={styles.formInputError}>{errors?.price?.message as string}</Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Max. Players Allowed</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                inputMode="numeric"
                                keyboardType="numeric"
                                placeholder={'Maximum players allowed: 99'}
                                maxLength={2}
                                style={styles.formInputText}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        </View>
                    )}
                    name={'max_players'}
                />
                {errors?.max_players?.message && (
                    <Text style={styles.formInputError}>
                        {errors?.max_players?.message as string}
                    </Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Number of Players per Team</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                keyboardType="numeric"
                                placeholder={'Maximum players allowed: 99'}
                                maxLength={2}
                                style={styles.formInputText}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                            />
                        </View>
                    )}
                    name={'players_per_team'}
                />
                {errors?.players_per_team?.message && (
                    <Text style={styles.formInputError}>
                        {errors?.players_per_team?.message as string}
                    </Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Are members allowed to bring guests?</Text>
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
                    name={'open_to_guests'}
                />
                {errors?.open_to_guests?.message && (
                    <Text style={styles.formInputError}>
                        {errors?.open_to_guests?.message as string}
                    </Text>
                )}
            </View>
            <Text>{formData?.date?.toLocaleDateString()}</Text>
            <Text>{formData?.time?.toLocaleTimeString()}</Text>
            <Text>{formData.location}</Text>
            <Text>{formData.max_players}</Text>
            <Text>{formData.open_to_guests ? 'true' : 'false'}</Text>
            <Text>{formData.price}</Text>
            <Text>{formData.players_per_team}</Text>
            <Button
                text={'Create Event'}
                color={Colors.colors.colorAccentPurple}
                onPress={() => handleSubmit(onSubmitPress)}
            />
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
    formInputPlaceholder: Typographies.inputPlaceholder,
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

export default CreateEvent;
