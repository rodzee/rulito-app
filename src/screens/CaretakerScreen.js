// Import Default
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Import Libraries
import { observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CaretakerScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1 items-center justify-center pb-3.5 bg-[#F1E6E0]'>
            {/* Main Container */}
            <View className='p-5 rounded-3xl bg-white' style={{ width: wp('85%'), height: hp('70%') }}>
                <View className='flex-row justify-between mb-10'>
                    <Text className='text-center font-bold text-xl text-gray-500'>Caretakers Profiles</Text>
                    <TouchableOpacity>
                        <Icon
                            name='account-plus'
                            size={hp(4)}
                            color='#757575'
                            onPress={() => navigation.navigate('AddCaretakerScreen')}
                        />
                    </TouchableOpacity>

                    {/* Profiles */}
                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-orange-500 text-base'>Diego</Text>
                    <Icon name='chevron-right' size={hp(3)} color='#F19336' />
                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-orange-500 text-base'>Johanna</Text>
                    <Icon name='chevron-right' size={hp(3)} color='#F19336' />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default observer(CaretakerScreen);
