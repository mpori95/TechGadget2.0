import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, PC, Headset, Speakers, Drone, Controller } from "./views/Screens";

const HomeStack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="PC" component={PC} />
            <HomeStack.Screen name="Headset" component={Headset} />
            <HomeStack.Screen name="Speakers" component={Speakers} />
            <HomeStack.Screen name="Drone" component={Drone} />
            <HomeStack.Screen name="Controller" component={Controller} />
        </HomeStack.Navigator>
    </NavigationContainer>
)