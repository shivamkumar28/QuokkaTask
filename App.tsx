/**
 * Shivam Kumar
 * React Native App
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import InitialNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './src/constant';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <View style={{ flex: 1 }}>
          <InitialNavigation />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
