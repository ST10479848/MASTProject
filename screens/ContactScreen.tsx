// screens/ContactScreen.tsx
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function ContactScreen() {
  return (
<ImageBackground
  source={{ uri: "https://cdn.pixabay.com/photo/2023/03/18/14/14/burger-7422088_1280.png" }}
  style={styles.bg}
>
      <View style={styles.container}>
        <Text style={styles.header}>Contact Us</Text>
        <Text style={styles.text}>
           Address: 45 Main Street, Cape Town, South Africa
        </Text>
        <Text style={styles.text}> Phone: +27 21 555 1234</Text>
        <Text style={styles.text}> Email: info@baylebites.co.za</Text>
        <Text style={styles.text}>
           Hours: Mon–Sat: 9am – 10pm | Sun: 9am – 8pm
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: "cover" },
  container: { flex: 1, justifyContent: "center", padding: 25 },
  header: {
    fontSize: 30,
    fontWeight: "700",
    color: "#392A24",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#392A24",
    textAlign: "center",
    marginBottom: 10,
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
