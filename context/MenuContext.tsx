import React, { createContext, useContext, useState, ReactNode } from "react";

export type Course = "Starter" | "Main" | "Dessert";

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  course: Course;
};

type MenuContextType = {
  menu: MenuItem[];
  addDish: (dish: Omit<MenuItem, "id">) => void;
  removeDish: (id: string) => void;
  setMenu: (menu: MenuItem[]) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be used within a MenuProvider");
  return ctx;
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Garlic Bread",
      description: "Toasty and garlicky",
      price: 25,
      course: "Starter",
    },
    { id: "2", name: "Margherita", description: "Classic", price: 80, course: "Main" },
    { id: "3", name: "Tiramisu", description: "Coffee dessert", price: 45, course: "Dessert" },
  ]);

  const addDish = (dish: Omit<MenuItem, "id">) => {
    const id = Date.now().toString() + Math.floor(Math.random() * 1000).toString();
    setMenu((prev) => [...prev, { ...dish, id }]);
  };

  const removeDish = (id: string) => {
    setMenu((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, addDish, removeDish, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
