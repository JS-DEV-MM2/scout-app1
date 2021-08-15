import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { Platform } from 'react-native';

import Colors from '../constants/Colors';


import TroopListScreen, {
  screenOptions as troopListScreenOptions
} from '../screens/TroopListScreen';
import MemberDetailScreen, {
  screenOptions as memberDetailScreenOptions
} from '../screens/MemberDetailScreen';
import ActivityListScreen, {
  screenOptions as activityListScreenOptions
} from '../screens/ActivityListScreen';
import ActivityDetailScreen, {
  screenOptions as activityDetailScreenOptions
} from '../screens/ActivityDetailScreen';


enableScreens();

const Stack = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const TroopStackNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Troop Info"
      screenOptions={defaultNavOptions}
    >
      <Stack.Screen name="Troop Info" component={TroopListScreen} />
      <Stack.Screen name="Member Details" component={MemberDetailScreen} />
    </Stack.Navigator>
  );
};

const ActivityStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen name="Activities" component={ActivityListScreen} />
      <Stack.Screen name="Activity Details" component={ActivityDetailScreen} />    
    </Stack.Navigator>
  );
};

export { TroopStackNavigator, ActivityStackNavigator };