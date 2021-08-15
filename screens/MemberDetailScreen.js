import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
//import { useSelector, useDispatch } from 'react-redux';

//import Colors from '../../constants/Colors';

//import * as troopActions from '../../store/actions/troop-actions';

const MemberDetailScreen = props => {
  const [isLoading, setIsLoading] = useState(false);

  //const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
        <Text style={styles.summary}>
          Member Detail Screen will be here
        </Text>
        
    </View>
  );
};

export const screenOptions = {
  headerTitle: 'Your Details'
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

export default MemberDetailScreen;