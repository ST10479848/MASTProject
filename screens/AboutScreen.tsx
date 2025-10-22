// screens/AboutScreen.tsx
import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ImageBackground
  source={{ uri: "https://cdn.pixabay.com/photo/2023/03/18/14/14/burger-7422088_1280.png" }}
  style={styles.bg}
>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>About Bayle Bites</Text>
        <Text style={styles.text}>
          Bayle Bites is a casual dining restaurant established in 2015, known
          for its handcrafted burgers, sizzling grills, and freshly baked
          desserts. We pride ourselves on using local, high-quality ingredients
          to serve food that feels like home.
        </Text>
        <Text style={styles.text}>
          Whether you’re here for a quick lunch or a relaxing evening meal,
          Bayle Bites delivers comfort and flavour in every bite.
        </Text>
        <Text style={styles.text}>
          Our chefs are passionate about creative yet affordable cuisine —
          mixing modern recipes with classic South African favourites.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: { padding: 20 },
  header: {
    fontSize: 30,
    fontWeight: "700",
    color: "#392A24",
    textAlign: "center",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: "#392A24",
    textAlign: "center",
    marginBottom: 15,
    lineHeight: 24,
  },navRow: {
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
