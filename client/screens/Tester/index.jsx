import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, ScrollView, RefreshControl, View } from 'react-native';
import { Text } from '../../components/Themed';
//======================================================
export default function Tester({ navigation }) {

  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState(0);

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  }

  const addCounter = () => {
    setCount(count + 1);
  }

  const subtractCounter = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log('tester mounted');
  }, [])

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
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
        >{count}</Text>
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