import React, { useState } from 'react';
import { StyleSheet, ScrollView, Alert, RefreshControl } from 'react-native';
import axios from 'axios';
import { url } from '../../constants/URLS';
import { Text } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function Database({ navigation }: RootTabScreenProps<'TabFour'>) {
  
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    testFetch();
    setRefreshing(false);
  }

  const testFetch = async () => {
    const configObj = {
      method: 'get',
      url: `${url}/api`,
    };
    try {
      // @ts-ignore
      const response = await axios(configObj);
      const { data } = response;
      const { message } = data;
      Alert.alert(
        message
      )
    } catch (err) {
      console.log(err);
    }
  }

  
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
      <Text>
        This is the database screen
      </Text>
      <Text>
        Pull screen down to test API
      </Text>
    </ScrollView>
  );
}

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
