import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Bayle Bites</Text>
      <Text style={styles.text}> 97 8th Avenue, Southfield, Cape Town</Text>
      <Text style={styles.text}> 021 357 9061</Text>
      <Text style={styles.text}> BayleBites@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f4ed' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  text: { fontSize: 16, marginVertical: 5 },
});
