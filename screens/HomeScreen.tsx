import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bayle Bites - Casual Dining Restaurant</Text>
      <Text style={styles.subtitle}>View our menu for delivery or in-store pickup</Text>

      <Button title="Click for Menu" onPress={() => navigation.navigate('Menu' as never)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f4ed' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#3c2f2f' },
  subtitle: { fontSize: 14, color: '#5e4b3c', marginBottom: 20 },
});
