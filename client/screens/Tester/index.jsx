import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as TesterScreenActions } from './reducer';
import * as TesterScreenSelectors from './selectors';
import Toast from 'react-native-toast-message';

import { Icon } from 'react-native-elements';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from '../../components/Themed';
//======================================================
export default function Tester({ navigation }) {
  const dispatch = useDispatch();
  const counter = useSelector(TesterScreenSelectors.getCounter);
  const dbCounter = useSelector(TesterScreenSelectors.getDBCounter);

  const addCounter = () => {
    dispatch(TesterScreenActions.setCounter(counter + 1));
  }
  const subtractCounter = () => {
    dispatch(TesterScreenActions.setCounter(counter - 1));
  }

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: `The value saved in the database is ${dbCounter}`
    })
  }, [dbCounter])

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Text
        style={styles.title}
      >
        Counter
      </Text>
      <View
        style={styles.counterGroup}
      >
        <Icon
          raised
          type='material'
          name='remove'
          color='blue'
          onPress={() => subtractCounter()} 
        />
        <Text
          style={styles.counter}
        >{counter}</Text>
        <Icon
          raised
          type='material'
          name='add'
          color='blue'
          onPress={() => addCounter()} 
        />
      </View>
    </ScrollView>
  )
}
//======================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 36,
  },
  counterGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});