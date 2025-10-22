import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, MenuItem } from "../types";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
  menu: MenuItem[];
};

export default function HomeScreen({ navigation, menu }: HomeScreenProps) {
  return (
    <ImageBackground
      source={{ uri: "https://cdn.pixabay.com/photo/2023/03/18/14/14/burger-7422088_1280.png" }}
      style={styles.bg}
    >
      <View style={styles.container}>
        <View style={styles.navRow}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.navButtonText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("About")}>
            <Text style={styles.navButtonText}>About</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Bayle Bites - Casual dining restaurant</Text>
        <Text style={styles.subtitle}>View our menu for delivery or in-store pickup</Text>
        <Text style={styles.totalItems}>Total menu items: {menu.length}</Text>

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

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Menu")}>
          <Text style={styles.buttonText}>CLICK FOR MENU</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: "cover", justifyContent: "center" },
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "700", color: "#392A24", textAlign: "center", marginBottom: 15 },
  subtitle: { fontSize: 16, color: "#392A24", textAlign: "center", marginBottom: 10 },
  totalItems: { fontSize: 16, color: "#392A24", marginBottom: 20 },
  item: { backgroundColor: "#FFF8E8", padding: 10, borderRadius: 10, marginBottom: 10, width: "100%" },
  itemText: { fontSize: 16, fontWeight: "bold", color: "#392A24" },
  itemCourse: { fontSize: 14, color: "#819171" },
  itemPrice: { fontSize: 14, fontWeight: "600", color: "#392A24" },
  button: { backgroundColor: "#FFF", paddingVertical: 15, paddingHorizontal: 30, borderRadius: 50, marginTop: 15 },
  buttonText: { fontSize: 18, fontWeight: "600", color: "#392A24" },
  navRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20, width: "100%" },
  navButton: { backgroundColor: "#819171", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 25 },
  navButtonText: { color: "#FFF", fontWeight: "600", fontSize: 14 },
});
