import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import FilterScreen from "./screens/FilterScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import ChefScreen from "./screens/ChefScreen";
import { RootStackParamList, MenuItem } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>([
    { id: "1", name: "Bruschetta", course: "Appetizers", price: 39.99 },
    { id: "2", name: "Beef Burger", course: "Mains", price: 79.99 },
    { id: "3", name: "Chocolate Cake", course: "Desserts", price: 49.99 },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="Menu">
          {(props) => <MenuScreen {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="Filter">
          {(props) => <FilterScreen {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Chef">
          {(props) => <ChefScreen {...props} menu={menu} setMenu={setMenu} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
