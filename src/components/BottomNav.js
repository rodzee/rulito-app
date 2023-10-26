// Import Default
import React from 'react';

// Import Libraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CaretakerScreen from '../screens/CaretakerScreen';
import ChildrenScreen from '../screens/ChildrenScreen';
import AddChildScreen from '../screens/AddChildScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#F19336',
                tabBarStyle: {
                    height: hp('10%'),
                },
                tabBarItemStyle: {
                    marginTop: hp(1),
                    paddingBottom: hp(2),
                },
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => <Icon name='home' color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name='History'
                component={HistoryScreen}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color, size }) => <Icon name='history' color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name='Settings'
                component={AddChildScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => <Icon name='cog' color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNav;
