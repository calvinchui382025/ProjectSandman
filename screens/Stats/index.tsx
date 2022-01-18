import React, { useState } from 'react';
import { StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import CircularProgress from 'react-native-circular-progress-indicator';
//======================================================
const generateRandomInteger = () => {
  const max = 100;
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//======================================================
export default function Stats({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [refreshing, setRefreshing] = useState(false);
  const [randomValue, setRandomValue] = useState(generateRandomInteger())

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  // });

  const wait = (timeout:number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = () => {
    setRefreshing(true);
    setRandomValue(generateRandomInteger());
    wait(2000).then(() => setRefreshing(false));
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}
      >
      <Text>
        This is the stats screen
      </Text>
      <CircularProgress
        initialValue={0}
        value={randomValue}
        radius={60}
        duration={3000}
        textColor={'black'}
        maxValue={100}
        title={'MPH'}
        titleColor={'black'}
        titleFontSize={10}
        titleStyle={{
          fontWeight: 'bold'
        }}
        circleBackgroundColor={'lightgrey'}
        activeStrokeWidth={15}
        inActiveStrokeWidth={10}
        activeStrokeColor={"gold"}
        inActiveStrokeColor={'grey'}
        inActiveStrokeOpacity={0.2}
        showProgressValue={true}
        clockwise={true}
      />
    </ScrollView>
  );
}
//======================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
