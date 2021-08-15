
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TroopStackNavigator, ActivityStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Troop" component={TroopStackNavigator} />
      <Tab.Screen name="My Activities" component={ActivityStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;