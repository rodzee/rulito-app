// Import Default
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Import Libraries
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import Screens
import BottomNav from '../components/BottomNav';

const AppNavigation = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <BottomNav />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppNavigation;
