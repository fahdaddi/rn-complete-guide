import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'baseline' }}>
        <TextInput placeholder="Course Goal" style={{ flex: 1, borderBottomColor: 'black', borderBottomWidth: 2, marginRight: 10}}/>
        <Button title="Add" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
