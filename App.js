
import { StyleSheet, View } from 'react-native';
import MenuNavigator from './src/components/navigation/MenuNavegacao';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    
    <SafeAreaProvider>
      
      <MenuNavigator />
    </SafeAreaProvider>
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
