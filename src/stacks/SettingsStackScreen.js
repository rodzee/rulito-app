// Import Default
import React from 'react';

// Import Libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import SettingsScreen from '../screens/SettingsScreen';
import ChildrenScreen from '../screens/ChildrenScreen';
import CaretakerScreen from '../screens/CaretakerScreen';
// import AddChild from '../screens/AddChild';
// import AddCaretaker from '../screens/AddCaretaker';

const SettingsStack = createNativeStackNavigator();
const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name='SettingsScreen' component={SettingsScreen} options={{ headerShown: false }} />
            <SettingsStack.Screen name='ChildrenScreen' component={ChildrenScreen} options={{ headerShown: false }} />
            <SettingsStack.Screen name='CaretakerScreen' component={CaretakerScreen} options={{ headerShown: false }} />
            {/* <SettingsStack.Screen name='AddChild' component={AddChild} options={{ headerShown: false }} />
            <SettingsStack.Screen name='AddCaretaker' component={AddCaretaker} options={{ headerShown: false }} /> */}
        </SettingsStack.Navigator>
    );
};

export default SettingsStackScreen;
