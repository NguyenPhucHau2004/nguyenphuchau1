import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './component/Screen/lab3 (1)/Main';
import Bai2 from './component/Screen/lab1 (1)/bai2';
import Bai3Lab1 from './component/Screen/lab1 (1)/bai3';

export default function App() {
  return(
    <Main></Main>
    // <Bai2></Bai2>
    // <Bai3Lab1></Bai3Lab1>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
