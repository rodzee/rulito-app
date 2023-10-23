// Import Default
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import Libraries
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Import Components
import TopBar from '../components/TopBar';

const HomeScreen = () => {
    return (
        <SafeAreaView className='flex-1 bg-[#F1E6E0]'>
            <View className='items-center' style={{ marginTop: hp(2) }}>
                {/* Top Content */}
                <TopBar />

                {/* Main Container */}
                <View
                    className='flex items-center rounded-3xl bg-white'
                    style={{ width: wp('85%'), height: hp('60%'), marginTop: hp('5%') }}
                >
                    {/* Timer Container */}
                    <View className='flex-row w-full items-center justify-between p-5 '>
                        <View>
                            <Text className='text-lg font-bold text-orange-400'>02:12:00 Hours</Text>
                            <Text className='uppercase'>Remaning for the Reward</Text>
                        </View>
                        <Icon name='timer' size={20} onPress={() => {}} />
                    </View>

                    {/* Gift Box */}
                    <Icon name='gift' size={hp('20%')} color='#FFD426' />

                    {/* Tap Container */}
                    {/* TODO - may need to add h-full in the Tap Container */}
                    <View className='flex w-full p-5 mt-4 rounded-3xl bg-orange-400'>
                        <View className='flex-row items-center justify-between'>
                            <Icon name='close-circle' size={hp('8%')} color='#FFF' />
                            <Icon name='close-circle' size={hp('8%')} />
                            <Icon name='close-circle' size={hp('8%')} />
                        </View>

                        <View className='w-full py-5 mt-4 rounded-2xl bg-orange-300 items-center justify-center self-center'>
                            <Text className='text-3xl text-white font-bold'>Double Tap</Text>
                            <Text className='text-white font-bold'>to add a strike</Text>
                        </View>
                    </View>

                    {/* Slider */}
                    <View>{/* TODO - add slider */}</View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
