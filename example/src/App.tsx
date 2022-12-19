import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import Swipelist from 'react-native-swipeable-list-view';

const data = [
  {
    name: 'Javascript',
  },
  {
    name: 'React Native',
  },
  {
    name: 'Swift',
  },
];

const App = () => {
  return (
    <View>
      <Swipelist
        data={data}
        renderRightItem={(data, index) => (
          <View key={index} style={styles.container}>
            <Text>
              {index + 1}. {data.name}
            </Text>
          </View>
        )}
        renderHiddenItem={(data, index) => (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={[styles.rightAction, { backgroundColor: '#bfbfbf' }]}
              onPress={() => {
                Alert.alert('Edit?', data.name);
              }}
            >
              <Image
                source={require('./pen.png')}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.rightAction, { backgroundColor: 'red' }]}
              onPress={() => {
                Alert.alert('Delete?', data.name);
              }}
            >
              <Image
                source={require('./tash.png')}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
        )}
        rightOpenValue={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginVertical: 10,
    backgroundColor: '#ffffff',

    justifyContent: 'center',
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  rightAction: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default App;
