export type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  Filter: undefined;
  Contact: undefined;
  About: undefined;
  Chef: undefined;
};

export type Course = "Starter" | "Main" | "Dessert";

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  course: Course;
};

