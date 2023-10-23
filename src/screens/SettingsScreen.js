// Import Default
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Import Libraries
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopBar from '../components/TopBar';

const SettingsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className='flex-1 items-center justify-between pb-3.5 bg-[#F1E6E0]'>
            <TopBar />
            {/* Main Container */}
            <View className='p-5 justify-between  rounded-3xl bg-white' style={{ width: wp('85%'), height: hp('70%') }}>
                {/* Profiles Container */}
                <View>
                    <TouchableOpacity
                        className='flex-row w-full items-center justify-between'
                        onPress={() => navigation.navigate('ChildrenScreen')}
                    >
                        <Text className='font-bold text-gray-500' style={{ fontSize: hp(3) }}>
                            Children Profiles
                        </Text>
                        <Icon name='chevron-right' size={hp(3)} color='#757575' />
                    </TouchableOpacity>

                    <TouchableOpacity className='flex-row w-full items-center justify-between'>
                        <Text
                            className='font-bold text-gray-500'
                            style={{ fontSize: hp(3) }}
                            onPress={() => navigation.navigate('CaretakerScreen')}
                        >
                            Caretakers Profiles
                        </Text>
                        <Icon name='chevron-right' size={hp(3)} color='#757575' />
                    </TouchableOpacity>
                </View>

                {/* Button Container */}
                <View className='self-center'>
                    <TouchableOpacity
                        className='bg-gray-500 rounded-2xl justify-center'
                        style={{ width: wp('70%'), height: hp('6%') }}
                    >
                        <Text className='text-center text-white font-bold'>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className='bg-red-500 mt-3 rounded-2xl justify-center'
                        style={{ width: wp('70%'), height: hp('6%') }}
                    >
                        <Text className='text-center text-white font-bold'>Delete Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SettingsScreen;
