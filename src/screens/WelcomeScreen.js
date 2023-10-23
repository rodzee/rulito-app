// Import Default
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

// Import Libraries
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const logoExpand = useSharedValue(0);
    const logoTranslateY = useSharedValue(0);
    const logoEnlarge = useSharedValue(0);

    useEffect(() => {
        logoExpand.value = 0;
        logoTranslateY.value = 48;
        logoEnlarge.value = 10;

        setTimeout(() => (logoExpand.value = withSpring(logoExpand.value + hp(5))), 100);
        setTimeout(() => (logoTranslateY.value = withSpring(logoTranslateY.value + hp(-8))), 100);
        setTimeout(() => (logoEnlarge.value = withSpring(logoEnlarge.value + hp(4))), 200);
        setTimeout(() => navigation.navigate('Home'), 2000);
    }, []);

    return (
        <View className='flex-1 justify-center items-center bg-[#F2E9E4]'>
            <Animated.View
                className='bg-[#F19336]/10 rounded-full'
                style={{ padding: logoExpand, transform: [{ translateY: logoTranslateY }], zIndex: 1 }}
            >
                <Icon name='gift' size={hp(15)} color='#F19336' />
            </Animated.View>
            <View className='items-center'>
                <Animated.Text
                    style={{ fontFamily: 'OpenSans-Bold', fontSize: logoEnlarge, color: '#757575', zIndex: -1 }}
                >
                    Rulito
                </Animated.Text>
            </View>
        </View>
    );
};

export default WelcomeScreen;
