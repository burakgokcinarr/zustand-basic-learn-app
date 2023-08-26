import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useUserStore } from './../zustand/store';

export default function Second() {

  const usersData = useUserStore((state) => state.users); 
  console.log("Second Page Data = ", usersData);
  const increment = useUserStore((state) => state.increment); 
  const countData = useUserStore((state) => state.count);

  return (
    <View style={styles.container}>
       <Text>{countData}</Text>
       <Button
          title='Increment'
          onPress={increment}
       />
      <Text>{usersData.length > 0 ? usersData[0].title : "No Data"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  }
})