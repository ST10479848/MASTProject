// screens/FilterScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function FilterScreen() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const menu = [
    { id: "1", course: "Appetizers", name: "Bruschetta", price: 39.99 },
    { id: "2", course: "Mains", name: "Beef Burger", price: 79.99 },
    { id: "3", course: "Mains", name: "Chicken Alfredo", price: 89.99 },
    { id: "4", course: "Desserts", name: "Chocolate Cake", price: 49.99 },
    { id: "5", course: "Sides", name: "Garlic Bread", price: 29.99 },
  ];

  const filteredMenu = selectedCourse
    ? menu.filter((item) => item.course === selectedCourse)
    : menu;

  return (
    <ImageBackground
      source={require("../assets/burger-pattern.png")}
      style={styles.bg}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Filter Menu</Text>
        <Text style={styles.subheader}>
          Choose a course to view specific dishes:
        </Text>

        <View style={styles.buttonRow}>
          {["Appetizers", "Mains", "Sides", "Desserts"].map((course) => (
            <TouchableOpacity
              key={course}
              style={[
                styles.filterButton,
                selectedCourse === course && styles.selectedButton,
              ]}
              onPress={() =>
                setSelectedCourse(selectedCourse === course ? null : course)
              }
            >
              <Text
                style={[
                  styles.filterText,
                  selectedCourse === course && styles.selectedText,
                ]}
              >
                {course}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={filteredMenu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemCourse}>{item.course}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No dishes found.</Text>
          }
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: { flex: 1, padding: 20 },
  header: {
    fontSize: 32,
    fontWeight: "700",
    color: "#392A24",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    textAlign: "center",
    color: "#392A24",
    marginBottom: 20,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#FFF8E8",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  selectedButton: {
    backgroundColor: "#819171",
  },
  filterText: {
    color: "#392A24",
    fontWeight: "600",
  },
  selectedText: {
    color: "#FFF",
  },
  item: {
    backgroundColor: "#FFF8E8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: { fontSize: 18, fontWeight: "bold", color: "#392A24" },
  itemCourse: { fontSize: 14, color: "#819171" },
  itemPrice: { fontSize: 16, fontWeight: "600", color: "#392A24" },
  emptyText: {
    textAlign: "center",
    color: "#392A24",
    fontSize: 16,
    marginTop: 20,
  },
});
