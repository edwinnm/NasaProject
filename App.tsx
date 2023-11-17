
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/views/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'rgba(7,26,93,255)',
    flex: 1
  },
})