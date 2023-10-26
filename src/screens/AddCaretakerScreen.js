// Import Default
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Import Libraries
import { View, Text, Image, SafeAreaView } from 'react-native';
import { useForm } from 'react-hook-form';

const AddCaretaker = () => {
    const navigation = useNavigation();
    // const {
    //     control,
    //     setFocus,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     defaultValues: {
    //         name: '',
    //         email: '',
    //         confirmEmail: '',
    //     },
    //     mode: 'onChange',
    //     reValidateMode: 'onSubmit',
    // });

    return (
        <SafeAreaView className='flex-1 items-center justify-center pb-3.5 bg-[#F1E6E0]'>
            <View className='items-center p-5 rounded-3xl bg-white' style={{ width: wp('85%'), height: hp('70%') }}>
                <TouchableOpacity
                    className='bg-gray-500 mt-3 rounded-2xl justify-center'
                    style={{ width: wp('70%'), height: hp('6%') }}
                    // onPress={handleSubmit(({ name, email }) => {
                    //     console.log(name, email);
                    // })}
                >
                    <Text className='text-center text-white font-bold'>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className='bg-gray-500 mt-3 rounded-2xl justify-center'
                    style={{ width: wp('70%'), height: hp('6%') }}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Text className='text-center text-white font-bold'>Cancel</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AddCaretaker;
