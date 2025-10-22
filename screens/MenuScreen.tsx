import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const menuData = [
  { id: '1', name: 'Bruschetta', category: 'Appetizers', price: 'R39.99' },
  { id: '2', name: 'Beef Burger', category: 'Main Dishes', price: 'R79.99' },
  { id: '3', name: 'Chocolate Cake', category: 'Desserts', price: 'R49.99' },
];

export default function MenuScreen() {
  const [menuItems, setMenuItems] = useState(menuData);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bayle Bites Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Filter by Course" onPress={() => navigation.navigate('Filter' as never)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f4ed', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#3c2f2f' },
  card: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 10, elevation: 2 },
  name: { fontSize: 18, fontWeight: '600', color: '#5e4b3c' },
  price: { color: '#a49a7d', fontWeight: 'bold' },
});
