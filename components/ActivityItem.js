import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import Colors from '../constants/Colors';

const ActivityItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.activity}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View>
            <View>
            <Text style={styles.heading}>{props.heading}</Text>
              <Text style={styles.description}>{props.description}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title="View Details"
                onPress={props.onViewDetail}
              />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activity: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  heading: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    marginVertical: 2,
    color: 'blue'
  },
  description: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 2,
    color: 'red'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  }
});

export default ActivityItem;
