import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
    <View style={{padding: 16, backgroundColor: "pink",}}>
      <Text>search</Text>
    </View>
    <View style={{flex: 1, padding: 16, backgroundColor: "lightblue",}}>
      <Text>list</Text>
    </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({ 
});
