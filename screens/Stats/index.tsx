import React, { useState, useCallback } from 'react';
import { StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import CircularProgress from 'react-native-circular-progress-indicator';
//======================================================
export default function Stats({ navigation }: RootTabScreenProps<'TabOne'>) {

  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  // });

  return (
    <View style={styles.container}>
      <Text>
        This is the stats screen
      </Text>
      <CircularProgress
        initialValue={0}
        value={100}
        radius={60}
        duration={3000}
        textColor={'black'}
        maxValue={200}
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
        // activeStrokeOpacity={1}
        inActiveStrokeOpacity={0.2}
        showProgressValue={true}
        clockwise={true}
      />
    </View>
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
