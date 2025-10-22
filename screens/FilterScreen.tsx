import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, MenuItem } from "../types";

type FilterScreenProps = {
  menu: MenuItem[];
};

export default function FilterScreen({ menu }: FilterScreenProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Filter">>();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const filteredMenu = selectedCourse
    ? menu.filter((item) => item.course === selectedCourse)
    : menu;

  return (
    <ImageBackground
      source={{ uri: "https://cdn.pixabay.com/photo/2023/03/18/14/14/burger-7422088_1280.png" }}
      style={styles.bg}
    >
      <View style={styles.container}>
        {/* Navigation Row */}
        <View style={styles.navRow}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
            <Text style={styles.navButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.navButtonText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("About")}>
            <Text style={styles.navButtonText}>About</Text>
          </TouchableOpacity>
        </View>

        {/* Header */}
        <Text style={styles.header}>Filter Menu</Text>
        <Text style={styles.subheader}>Choose a course to view specific dishes:</Text>

        {/* Filter Buttons */}
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

        {/* Menu List */}
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
  header: { fontSize: 32, fontWeight: "700", color: "#392A24", marginBottom: 10, textAlign: "center" },
  subheader: { textAlign: "center", color: "#392A24", marginBottom: 20, fontSize: 16 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", marginBottom: 20 },
  filterButton: { backgroundColor: "#FFF8E8", borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15, marginVertical: 5 },
  selectedButton: { backgroundColor: "#819171" },
  filterText: { color: "#392A24", fontWeight: "600" },
  selectedText: { color: "#FFF" },
  item: { backgroundColor: "#FFF8E8", padding: 15, borderRadius: 10, marginBottom: 10 },
  itemText: { fontSize: 18, fontWeight: "bold", color: "#392A24" },
  itemCourse: { fontSize: 14, color: "#819171" },
  itemPrice: { fontSize: 16, fontWeight: "600", color: "#392A24" },
  emptyText: { textAlign: "center", color: "#392A24", fontSize: 16, marginTop: 20 },
  navRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  navButton: { backgroundColor: "#819171", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 25 },
  navButtonText: { color: "#FFF", fontWeight: "600", fontSize: 14 },
});
