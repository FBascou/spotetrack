import { StyleSheet, TextInput, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Colors from '../../../constants/Colors';
import Typographies from '../../../constants/Typographies';
import { UsersType } from '../types/typesUsers';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

const FormAccountSchema = z.object({
    firstName: z
        .string({
            required_error: 'First name is mandatory',
            invalid_type_error: 'First name must have at least 2 characters'
        })
        .min(2, 'First name must have at least 2 characters')
        .max(30),
    lastName: z
        .string({
            required_error: 'Last name is mandatory',
            invalid_type_error: 'Last name must have at least 2 characters'
        })
        .min(2, 'Last name must have at least 2 characters')
        .max(30),
    email: z.string().email(),
    phone: z.string().min(6, { message: 'Phone must have at least 6 numbers' })
    // sports: z.array(
    //     z.object({
    //         id: z.number(),
    //         name: z.string()
    //     })
    // )
});

type FormAccountType = z.infer<typeof FormAccountSchema>;

const accountTest: UsersType = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'asdasdasd@hotmail.com',
    birth_date: '18/04/1985',
    phone: '546512345',
    // sports: [{ id: 0, name: 'Football' }],
    id: 0,
    shareContact: {
        team_owners: false,
        team_members: false
    },
    createdAt: '22/11/2023',
    teams: [
        { id: 1, name: 'sadsad' },
        { id: 1, name: 'sadsad' },
        { id: 1, name: 'sadsad' },
        { id: 1, name: 'sadsad' },
        { id: 1, name: 'sadsad' }
    ],
    events: []
};

const FormAccount = () => {
    const formAccountDefaultValues: FormAccountType = {
        firstName: accountTest.firstName,
        lastName: accountTest.lastName,
        // sports: accountTest.sports,
        email: accountTest.email,
        phone: accountTest.phone
    };

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormAccountType>({
        resolver: zodResolver(FormAccountSchema),
        defaultValues: formAccountDefaultValues
    });

    const onSubmitPress: SubmitHandler<FormAccountType> = (data) => {
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
                <Text style={styles.formLabel}>First Name</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                style={styles.formInputText}
                                inputMode="text"
                                keyboardType="default"
                                placeholder="John"
                                maxLength={30}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                defaultValue={formAccountDefaultValues.firstName}
                                value={value}
                                editable={false}
                                selectTextOnFocus={false}
                            />
                        </View>
                    )}
                    name={'firstName'}
                />
                {errors?.firstName?.message && (
                    <Text style={styles.formInputError}>
                        {errors?.firstName?.message as string}
                    </Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Last Name</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                style={styles.formInputText}
                                inputMode="text"
                                keyboardType="default"
                                placeholder="Doe"
                                maxLength={30}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                defaultValue={formAccountDefaultValues.lastName}
                                value={value}
                                editable={false}
                                selectTextOnFocus={false}
                            />
                        </View>
                    )}
                    name={'lastName'}
                />
                {errors?.lastName?.message && (
                    <Text style={styles.formInputError}>{errors?.lastName?.message as string}</Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Email</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                style={styles.formInputText}
                                inputMode="email"
                                keyboardType="email-address"
                                placeholder="john@doe.com"
                                maxLength={30}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                defaultValue={formAccountDefaultValues.email}
                                value={value}
                                editable={false}
                                selectTextOnFocus={false}
                            />
                        </View>
                    )}
                    name={'email'}
                />
                {errors?.email?.message && (
                    <Text style={styles.formInputError}>{errors?.email?.message as string}</Text>
                )}
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Phone</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                        <View style={styles.formInput}>
                            <TextInput
                                style={styles.formInputText}
                                inputMode="tel"
                                keyboardType="phone-pad"
                                placeholder={'I.E. +393481701811'}
                                maxLength={15}
                                onBlur={onBlur}
                                onChangeText={(value) => onChange(value)}
                                defaultValue={formAccountDefaultValues.phone}
                                value={value}
                                // value={
                                //     formAccountDefaultValues.phone === ''
                                //         ? value
                                //         : formAccountDefaultValues.phone
                                // }
                            />
                        </View>
                    )}
                    name={'phone'}
                />
                {errors?.phone?.message && (
                    <Text style={styles.formInputError}>{errors?.phone?.message as string}</Text>
                )}
            </View>
            {/* <View style={styles.formGroup}>
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
                                // thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
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
            </View> */}
            <View>
                <TouchableOpacity
                    style={[styles.formButton, { backgroundColor: Colors.colors.colorAccentPink }]}
                    onPress={() => reset(formAccountDefaultValues)}>
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
        padding: 12,
        shadowColor: Colors.colors.colorPrimary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1
    },
    formButtonText: Typographies.buttonPrimary
});

export default FormAccount;
