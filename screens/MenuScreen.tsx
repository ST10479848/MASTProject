import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

export default function MenuScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Menu">>();
  const [menu] = useState([
    { id: "1", course: "Appetizers", name: "Bruschetta", price: 39.99 },
    { id: "2", course: "Mains", name: "Beef Burger", price: 79.99 },
    { id: "3", course: "Desserts", name: "Chocolate Cake", price: 49.99 },
  ]);

  return (
 <ImageBackground
   source={{ uri: "https://cdn.pixabay.com/photo/2023/03/18/14/14/burger-7422088_1280.png" }}
   style={styles.bg}
 >
      <View style={styles.container}>
        <Text style={styles.header}>Menu</Text>
        <FlatList
          data={menu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemCourse}>{item.course}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          )}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Chef")}>
          <Text style={styles.buttonText}>Add New Dish</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: { flex: 1, padding: 20 },
  header: { fontSize: 32, fontWeight: "700", color: "#392A24", marginBottom: 10 },
  item: { backgroundColor: "#FFF8E8", padding: 15, borderRadius: 10, marginBottom: 10 },
  itemText: { fontSize: 18, fontWeight: "bold", color: "#392A24" },
  itemCourse: { fontSize: 14, color: "#819171" },
  itemPrice: { fontSize: 16, fontWeight: "600", color: "#392A24" },
  button: { backgroundColor: "#819171", padding: 15, borderRadius: 50, marginTop: 20, alignItems: "center" },
  buttonText: { color: "#FFF", fontWeight: "600" },navRow: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginBottom: 20,
},
navButton: {
  backgroundColor: "#819171",
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 25,
},
navButtonText: {
  color: "#FFF",
  fontWeight: "600",
  fontSize: 14,
},
});
