import React, { useState } from 'react';
import {
  FlatList,
  Button,
  Platform,
  StyleSheet,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import ActivityItem from '../components/ActivityItem';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';

import * as activityActions from '../store/actions/activity-actions';

const ActivityListScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const activities = useSelector(state => state.activities.allActivities);
  const dispatch = useDispatch();

  const selectItemHandler = (id, description) => {
    props.navigation.navigate('ActivityDetail', {
      activityId: id
    });
  };

  return (
    <FlatList
      data={activities}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ActivityItem
          heading={itemData.item.heading}
          description={itemData.item.description}
          onSelect={() => {
            selectItemHandler(itemData.item.id)
          }}
        />
      )}
      />
  );
};

export const screenOptions = {
  headerTitle: 'Activities'
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10
  }
});

export default ActivityListScreen;