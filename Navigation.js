import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import araba from './screens/araba';
import forgot from'./screens/forgot';
import map from './screens/map';
import iücdoluluk from'./screens/OtoparkAlanları/iüc/iücdoluluk'
import iücotoparkalanlar from'./screens/DinamikButton/iücotoparkalanlar'
import timer from './screens/timer'

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
                <Stack.Screen name="araba" component={araba} options={{headerShown: false}} />
                <Stack.Screen name="forgot" component={forgot} options={{headerShown: false}} />
                <Stack.Screen name="map" component={map} options={{headerShown: false}} />
                <Stack.Screen name="iücdoluluk" component={iücdoluluk} options={{headerShown: false}} />
                <Stack.Screen name="iücotoparkalanlar" component={iücotoparkalanlar} options={{headerShown: false}} />
                <Stack.Screen name="timer" component={timer} options={{headerShown: false}} />
              
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;