import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Siemka Jacob!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <RegistrationScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
