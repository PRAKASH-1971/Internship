import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import OtpPage from './components/OtpPage';
import MapPage from './components/MapPage';

export default function App() {
  const Stack = createNativeStackNavigator();



  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:"#CCE2F5",color:"white",alignSelf:'center',},
      headerTintStyle:{ fontSiz:25,fontWeight:700 } 
    }}> 
      <Stack.Screen name="LOGIN" component={Login} />
      <Stack.Screen name="OTP" component={OtpPage} />
      <Stack.Screen name="MAP" component={MapPage} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
