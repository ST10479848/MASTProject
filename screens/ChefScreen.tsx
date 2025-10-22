
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuItem } from "../types";

type ChefProps = {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

export default function ChefScreen({ menu, setMenu }: ChefProps) {
  const [dish, setDish] = useState("");
  const [desc, setDesc] = useState("");
  const [course, setCourse] = useState("Appetizers");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!dish.trim() || !desc.trim() || !price.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
      setError("Please enter a valid price greater than 0.");
      return;
    }

    setError("");

    const newDish: MenuItem = {
      id: Date.now().toString(),
      name: dish,
      course,
      price: priceNumber,
    };

    setMenu([...menu, newDish]);
    setDish("");
    setDesc("");
    setPrice("");
  };

  return (
    <ImageBackground
      source={{ uri: "https://cdn.pixabay.com/photo/2023/03/18/14/14/burger-7422088_1280.png" }}
      style={styles.bg}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Add Menu Item</Text>

        {error ? <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text> : null}

        <TextInput placeholder="Dish name" style={styles.input} value={dish} onChangeText={setDish} />
        <TextInput placeholder="Description" style={styles.input} value={desc} onChangeText={setDesc} />
        <TextInput placeholder="Price" style={styles.input} keyboardType="numeric" value={price} onChangeText={setPrice} />

        <Text style={styles.label}>Select Course</Text>
        <Picker selectedValue={course} onValueChange={(value) => setCourse(value)} style={styles.input}>
          <Picker.Item label="Appetizers" value="Appetizers" />
          <Picker.Item label="Mains" value="Mains" />
          <Picker.Item label="Sides" value="Sides" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: "cover" },
  container: { flex: 1, padding: 20 },
  header: { fontSize: 28, fontWeight: "700", color: "#392A24", marginBottom: 20 },
  input: { backgroundColor: "#FFF", borderRadius: 10, padding: 10, marginBottom: 15 },
  label: { fontSize: 16, color: "#392A24", marginBottom: 5 },
  button: { backgroundColor: "#819171", padding: 15, borderRadius: 50, alignItems: "center", marginTop: 20 },
  buttonText: { color: "#FFF", fontWeight: "600" },
  errorText: { color: "red", fontWeight: "600", marginBottom: 10, textAlign: "center" },

  navRow: {
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
