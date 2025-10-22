import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>();
  return (
   <ImageBackground
     source={{ uri: "https://cdn.pixabay.com/photo/2023/03/18/14/14/burger-7422088_1280.png" }}
     style={styles.bg}
   >
      <View style={styles.container}>
        <Text style={styles.title}>Bayle Bites - Casual dining restaurant</Text>
        <Text style={styles.subtitle}>View our menu for delivery or in-store pickup</Text>
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
  subtitle: { fontSize: 16, color: "#392A24", textAlign: "center", marginBottom: 30 },
  button: { backgroundColor: "#FFF", paddingVertical: 15, paddingHorizontal: 30, borderRadius: 50 },
  buttonText: { fontSize: 18, fontWeight: "600", color: "#392A24" },navRow: {
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
