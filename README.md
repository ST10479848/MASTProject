Changelog – Bayle Bites App (MAST Project)

1. Core Architecture

* Implemented `MenuContext` to store menu items globally across all screens.
* Wrapped `NavigationContainer` in `MenuProvider` in `App.tsx`.
* Replaced local state menu arrays in `App.tsx` with context-driven state to ensure all screens reflect updates instantly.

2. Home Screen

* Added display of total menu items.
* Added calculation and display of average price per course (`Starter`, `Main`, `Dessert`).
* Connected Home Screen to `MenuContext` for real-time updates.
* Maintained original styling and background image for consistency.

3. Chef Screen

* Moved menu item addition from Home Screen to a dedicated Chef Screen.
* Added form inputs for dish name, description, price, and course selection.
* Implemented validation:

  * All fields required.
  * Price must be numeric and greater than 0.
* Added course selection dropdown with correct types (`Starter`, `Main`, `Dessert`).
* Implemented Remove Dish functionality allowing deletion of any menu item.
* Styled Chef Screen to match app theme, including navigation and menu list.

4. Menu Screen

* Displays all menu items in a styled list.
* Added button to navigate to Chef Screen to add new dishes.
* Connected to `MenuContext` to ensure live updates when new dishes are added or removed.

5. Filter Screen

* Added functionality to filter menu items by course (`Starter`, `Main`, `Dessert`).
* Updates dynamically based on `MenuContext` changes.
* Styled filter buttons and menu list to match app theme.
* Navigation buttons added for Back, Contact, and About pages.

6. Types

* Updated `types.ts`:

  * Defined `Course` type: `"Starter" | "Main" | "Dessert"`.
  * Updated `MenuItem` type to use `Course` type for the `course` field.
* Ensured type consistency across Home, Chef, Filter, and Menu screens to prevent runtime errors.

7. Bug Fixes and Optimizations

* Resolved TypeScript type errors related to course selection in Chef Screen.
* Removed prop-drilling by fully integrating `MenuContext`.
* Ensured Home Screen calculations handle empty course arrays correctly.
* Refined navigation consistency across all screens.

.
[MAST-P1.docx](https://github.com/user-attachments/files/23060155/MAST-P1.docx)
.
https://pixabay.com/vectors/burger-pattern-hamburger-burger-7422088/
.
https://youtu.be/DBPlc-jZGRM
.
https://github.com/ST10479848/MASTProject.git
.
https://github.com/user-attachments/assets/e52011c3-9b1f-4a79-910c-8055a67fbd3c


