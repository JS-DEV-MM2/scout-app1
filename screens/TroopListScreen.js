import React, { useState } from 'react';
import {
  FlatList,
  Button,
  Platform,
  StyleSheet,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import MemberItem from '../components/MemberItem';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';

import * as troopActions from '../store/actions/troop-actions';

const TroopListScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const members = useSelector(state => state.troops.allMembers);
  const dispatch = useDispatch();

  const selectItemHandler = (id, lname) => {
    props.navigation.navigate('MemberDetail', {
      memberId: id,
      memberLname: lname
    });
  };


  return (
    <FlatList
      data={members}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <MemberItem
          fname={itemData.item.fname}
          lname={itemData.item.lname}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.lname)
          }}
        />
      )}
      />
  );
};

export const screenOptions = {
    headerTitle: 'Meal Categories'
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

export default TroopListScreen;