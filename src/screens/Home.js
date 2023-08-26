import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useUserStore } from './../zustand/store';
import { useNavigation } from '@react-navigation/native';

/*
    "getAllUsers" ve "increment" metodları "store.js" import edilip aşağıdaki gibi hem action tetikleme hemde state durumlaru tanımlanmıştır.
    Bu durumda her bir action için 1 state belirtilmiştir. Örnek olarak fetchApi bir buton tetiklemesinde api isteği yapıp "users" state'e set edilir
    ve "users" state'i izlenir.

    const fetchApi  = useUserStore((state) => state.getAllUsers);
    const usersData = useUserStore((state) => state.users);

    Yukarıdaki tanımlama tamamen "store.js" de create edilen yapıdan gelmektedir.
*/

export default function Home() {

  const navigation= useNavigation();
  const fetchApi  = useUserStore((state) => state.getAllUsers); // Action (Fetch data vs işlemleri için)
  const increment = useUserStore((state) => state.increment); 
  const usersData = useUserStore((state) => state.users);       // State (State değişkeni-1)
  const countData = useUserStore((state) => state.count);       // State (State değişkeni-2)
  //console.log(usersData);

  getData = () => fetchApi('https://jsonplaceholder.typicode.com/posts');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.countText}>{countData}</Text>
      <View style={styles.btnView}>
        <Button
          title='Get User Data'
          onPress={getData}
          color="white"
        />
        <Button
          title='Go to Other Page'
          onPress={() => navigation.navigate("second")}
          color="purple"
        />
         <Button
          title='Increment Count'
          onPress={increment}
          color="black"
        />
      </View>
      <ScrollView>
        <View >
          {
            usersData.map((item, index) => {
              return (
                <View key={index} style={styles.dataView}>
                  <Text>{item.title}</Text>
                  <Text>-----------------</Text>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8a766',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnView: {
    width: 200,
    height: 200,
    backgroundColor: 'tomato',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dataView: {
    width: 300,
    backgroundColor: 'yellow',
    borderRadius: 15,
    marginVertical: 3,
    padding: 10
  },
  countText: {
    color: 'black',
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});
