// Import Default
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// Import Libraries
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { observer } from 'mobx-react';
import { useAuthenticationStore } from '../stores/AuthenticationStore';

// Import Store
import { useChildStore } from '../stores/ChildStore';

const ChildrenScreen = () => {
    const navigation = useNavigation();
    const { getChildren, children } = useChildStore();
    // const { user } = useAuthenticationStore();

    // useEffect(() => {
    //     func();
    // }, []);

    // const func = async () => {
    //     await getChildren(user.uid);
    // };

    return (
        <SafeAreaView className='flex-1 items-center justify-center pb-3.5 bg-[#F1E6E0]'>
            {/* Main Container */}
            <View className='p-5 rounded-3xl bg-white' style={{ width: wp('85%'), height: hp('70%') }}>
                <View className='flex-row justify-between mb-10'>
                    <Text className='text-center font-bold text-xl text-gray-500'>Children Profiles</Text>
                    <TouchableOpacity>
                        <Icon
                            name='account-plus'
                            size={hp(4)}
                            color='#757575'
                            onPress={() => navigation.navigate('AddChildScreen')}
                        />
                    </TouchableOpacity>

                    {/* Profiles */}
                </View>
                {/* {children.map((child) => (
                    <View key={child.uid}>
                        <Image source={child.avatar !== null ? { uri: child.avatarURL } : require('')} size={26} />
                        <Text>{child.name}</Text>
                        <Icon name='chevron-right' />
                    </View>
                ))} */}
            </View>
        </SafeAreaView>
    );
};

export default observer(ChildrenScreen);
