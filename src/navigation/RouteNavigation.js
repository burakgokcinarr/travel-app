import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Wellcome, Home, Detail } from '../screens';

const Stack = createNativeStackNavigator();

function RouteNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Stack.Screen name="wellcome" component={Wellcome} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="detail" component={Detail} />
        </Stack.Navigator>
    );
}

export default RouteNavigation;