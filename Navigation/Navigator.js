import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Movies from '../Screens/Movies';
import HomeScreen from '../Screens/HomeScreen';
import AdditionalInfo from '../Screens/AdditionalInfo';


const stack = createStackNavigator();

function HomeScreenStack() {
    return(

        // Home Screen
        <stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <stack.Screen name='Home Screen' component={HomeScreen} options={
                {headerStyle:{
                    backgroundColor: "#808080"
            },
            title: "Movie Search Browser",
            headerTitleStyle:{
                fontWeight: 'bold',
                fontSize: 26
            },
            headerTintColor: '#000000'
            }}/>

        {/* Result screen */}
            <stack.Screen name='Movies' component={Movies} options={
                {headerStyle:{
                    backgroundColor: "#808080"
            },
            title: "Search Results",
            headerTitleStyle:{
                fontWeight: 'bold',
                fontSize: 26
            },
            headerTintColor: '#000000'
            }}/>

        {/* Additional Information screen */}
            <stack.Screen name='Additional Info' component={AdditionalInfo} 
            options={
                {headerStyle:{
                    backgroundColor: "#808080"
            },
            headerTitleStyle:{
                fontWeight: 'bold',
                fontSize: 26
            },
            headerTintColor: '#000000'
            }}/>
        </stack.Navigator>  
    )
}

export {HomeScreenStack};
