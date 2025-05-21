import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreens from '../screens/HomeScreens'
import UsuarioScreens from '../screens/UsuarioScreens'

const Stack = createStackNavigator ()

export default function StackRoutes() {
return (
<Stack.Navigator>

<Stack.Screen name ='HomeScreens' component={HomeScreens}
options={}
/>

<Stack.Screen name ='UsuarioScreens' component={UsuarioScreens}/>
    
</Stack.Navigator>
)}