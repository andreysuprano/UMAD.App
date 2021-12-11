import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Store from "../screens/Store";
import Theme from "../assets/styles/Theme";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: Theme.primary,
          tabBarInactiveTintColor: Theme.title,
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarStyle: {
            height: '10%',
            paddingTop: 5,
          },

        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={() => ({
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={26} color={color} />
            ),
            headerShown: false,
          })}
        />
        <Tab.Screen
          name="Store"
          component={Store}
          options={() => ({
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="store-alt" size={26} color={color} />
            ),
            headerShown: false,
          })}
        />
        <Tab.Screen
          name="Bíblia"
          component={Home}
          options={() => ({
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="book" size={26} color={color} />
            ),
            headerShown: false,
          })}
        />
        <Tab.Screen
          name="Perfil"
          component={Menu}
          options={() => ({
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={26} color={color} />
            ),
            headerTintColor: Theme.title,
            headerTitleStyle: {
              fontFamily: 'Montserrat_800ExtraBold',
              fontSize: 24
            },
            headerTitleAlign: "center"
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
