import React, { useState } from "react";
import {  View,Text,TextInput,TouchableOpacity,StyleSheet,ImageBackground} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Course, MenuItem } from "../types";
import { useMenu } from "../context/MenuContext";

type ChefScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Chef">;
};

export default function ChefScreen({ navigation }: ChefScreenProps) {
  const { menu, addDish, removeDish } = useMenu();

  const [dish, setDish] = useState("");
  const [desc, setDesc] = useState("");
  const [course, setCourse] = useState<Course>("Starter");
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

    addDish(newDish);
    setDish("");
    setDesc("");
    setPrice("");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2023/03/18/14/14/burger-7422088_1280.png",
      }}
      style={styles.bg}
    >
      <View style={styles.container}>
        <View style={styles.navRow}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.navButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.navButtonText}>Menu</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.header}>Add Menu Item</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TextInput
          placeholder="Dish name"
          style={styles.input}
          value={dish}
          onChangeText={setDish}
        />
        <TextInput
          placeholder="Description"
          style={styles.input}
          value={desc}
          onChangeText={setDesc}
        />
        <TextInput
          placeholder="Price"
          style={styles.input}
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <Text style={styles.label}>Select Course</Text>
        <Picker
          selectedValue={course}
          onValueChange={(value: Course) => setCourse(value)}
          style={styles.input}
        >
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>

        <Text style={[styles.header, { marginTop: 30 }]}>Current Menu</Text>
        {menu.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={styles.itemText}>
              {item.name} - {item.course} - R{item.price}
            </Text>
            <TouchableOpacity onPress={() => removeDish(item.id)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  button: {
    backgroundColor: "#819171",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#FFF", fontWeight: "600" },
  errorText: {
    color: "red",
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  navRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  navButton: { backgroundColor: "#819171", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 25 },
  navButtonText: { color: "#FFF", fontWeight: "600", fontSize: 14 },
  itemRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  itemText: { color: "#392A24", fontWeight: "600" },
  removeText: { color: "red", fontWeight: "600" },
});
