import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FilterScreen() {
  const [selected, setSelected] = useState('All');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Course</Text>
      <View style={styles.btnGroup}>
        <Button title="All" onPress={() => setSelected('All')} />
        <Button title="Appetizers" onPress={() => setSelected('Appetizers')} />
        <Button title="Mains" onPress={() => setSelected('Mains')} />
        <Button title="Desserts" onPress={() => setSelected('Desserts')} />
      </View>
      <Text style={styles.selected}>Selected Filter: {selected}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f4ed', alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  btnGroup: { flexDirection: 'row', gap: 5, marginVertical: 10 },
  selected: { marginTop: 20, color: '#3c2f2f' },
});
