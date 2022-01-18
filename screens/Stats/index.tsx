import React, { useState } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Text } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import CircularProgress from 'react-native-circular-progress-indicator';
import { generateRandomInteger } from '../../utilities';
//======================================================
export default function Stats({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [refreshing, setRefreshing] = useState(false);
  const [randomValue, setRandomValue] = useState( generateRandomInteger() );

  const onRefresh = () => {
    setRefreshing(true);
    setRandomValue(generateRandomInteger());
    setRefreshing(false);
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
