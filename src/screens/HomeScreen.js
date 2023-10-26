// Import Default
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import Libraries
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { observer } from 'mobx-react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import SwipeButton from 'rn-swipe-button';

// Import Components
import TopBar from '../components/TopBar';

// Import Store
import { useChildStore } from '../stores/ChildStore';
import { useAuthenticationStore } from '../stores/AuthenticationStore';
import { useStrikeStore } from '../stores/StrikeStore';

const HomeScreen = () => {
    // const strikeStore = useStrikeStore();
    // const childStore = useChildStore();
    const authenticationStore = useAuthenticationStore();

    const { user } = authenticationStore;
    // const { child, getChildren } = childStore;
    // const { strikes, strikeIndex, getStrikes, setStrike, deleteStrike, handleChangeStrikeStore } = strikeStore;

    // const doubleTap = Gesture.Tap()
    //     .numberOfTaps(2)
    //     .shouldCancelWhenOutside(true)
    //     .runOnJS(true)
    //     .onStart(() => {
    //         handleChangeStrikeStore('strikeIndex', strikeIndex + 1);
    //         setStrike(child.uid);
    //     });

    const RemoveIcon = () => <Icon name='minus-circle' size={75} color='#757575' />;

    // useEffect(() => {
    //     getChildren(user.uid).then(() => {
    //         getStrikes(child.uid);
    //     });
    // }, []);

    return (
        <SafeAreaView className='flex-1 bg-[#F1E6E0] items-center'>
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
                <View>
                    <SwipeButton
                        containerStyles={{
                            height: 35,
                            alignItems: 'stretch',
                            borderRadius: 20,
                            marginTop: '15%',
                            backgroundColor: '#FFF',
                        }}
                        thumbIconStyles={{
                            width: 75,
                            height: 75,
                        }}
                        thumbIconBackgroundColor='#F1E6E0'
                        thumbIconComponent={RemoveIcon}
                        thumbIconBorderColor='#757575'
                        railBackgroundColor='#F1E6E0'
                        railBorderColor='#F1E6E0'
                        railFillBackgroundColor='#F19336'
                        railFillBorderColor='#F1E6E0'
                        resetAfterSuccessAnimDelay={3}
                        resetAfterSuccessAnimDuration={3}
                        screenReaderEnabled
                        shouldResetAfterSuccess
                        onSwipeSuccess={() => {
                            deleteStrike();
                        }}
                        height={30}
                        titleColor='#757575'
                        title='Slide to remove one strike'
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default observer(HomeScreen);
