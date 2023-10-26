// Import Default
import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, Button } from 'react-native';

// Import Libraries
import { observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Import Stores
import { useChildStore } from '../stores/ChildStore';
import { useAuthenticationStore } from '../stores/AuthenticationStore';
import { useStorageStore } from '../stores/StorageStore';
import Child from '../stores/models/Child';

const AddChildScreen = ({ userId }) => {
    const { setChild, getChildren } = useChildStore();
    const { user } = useAuthenticationStore();
    const { imageURL, pickImage, handleChangeStorageStore } = useStorageStore();
    const navigation = useNavigation();

    useEffect(() => {
        // requestImagePermission();

        // cleanup
        return async () => {
            await func();
            handleChangeStorageStore('imageURL', null);
            reset();
        };
    }, []);

    const func = async () => {
        await getChildren(user.uid);
    };

    // const {
    //     control,
    //     setFocus,
    //     handleSubmit,
    //     formState: { errors },
    //     reset,
    // } = useForm({
    //     defaultValues: { name: '' },
    //     mode: 'onChange',
    //     reValidateMode: 'onSubmit',
    // });

    // const requestImagePermission = async () => {
    //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //     if (status !== 'granted') {
    //         alert('Sorry, we need camera roll permissions to make this work!');
    //     }
    // };

    return (
        <SafeAreaView className='flex-1 items-center justify-center pb-3.5 bg-[#F1E6E0]'>
            <View className='items-center p-5 rounded-3xl bg-white' style={{ width: wp('85%'), height: hp('70%') }}>
                <Text className='text-lg font-bold text-gray-500'>Add Child</Text>
                <TouchableOpacity
                    style={{ alignSelf: 'center', borderRadius: 50 }}
                    title='Pick an image from camera roll'
                    // onPress={pickImage}
                >
                    <Image
                        size={120}
                        style={{ alignSelf: 'center', marginBottom: 30 }}
                        // source={imageURL !== null ? { uri: imageURL } : require('../../assets/icon.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    className='bg-orange-500 mt-3 rounded-2xl justify-center'
                    style={{ width: wp('70%'), height: hp('6%') }}
                    // onPress={handleSubmit(async ({ name }) => {
                    //     await setChild(user?.uid, new Child({ name }));
                    //     navigation.navigate('ChildProfile');
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
                    <Text className='text-center text-white font-bold'>Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default observer(AddChildScreen);
