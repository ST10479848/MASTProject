import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Bayle Bites</Text>
      <Text style={styles.text}>
        Bayle Bites is a new, up-and-coming local business offering delicious casual dining and takeaways.
      </Text>
      <Text style={styles.text}>
        Our ingredients are locally sourced and FDA approved. We value customer safety, sanitation, and satisfaction.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f4ed', padding: 20, justifyContent: 'center' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10 },
});
