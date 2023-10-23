import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

// Import Libraries
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopBar from '../components/TopBar';

const HistoryScreen = () => {
    return (
        <SafeAreaView className='flex-1 items-center justify-between pb-3.5 bg-[#F1E6E0]'>
            <TopBar />
            {/* Main Container */}
            <View
                className='flex p-5  items-left  rounded-3xl bg-white'
                style={{ width: wp('85%'), height: hp('70%') }}
            >
                <Text>History Screen</Text>
            </View>
        </SafeAreaView>
    );
};

export default HistoryScreen;
