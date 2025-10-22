Change Log

Implemented HomeScreen with navigation to Menu, Contact, and About screens.
Added FilterScreen for filtering menu items by course.
Introduced ChefScreen for adding new dishes to the menu.
Established basic navigation structure using React Navigation.

Enhanced UI with consistent styling across all screens.
Replaced static images with remote image URLs for better performance.
Added navigation buttons (Back, Contact, About) to all screens for improved user experience.

Refactored state management: lifted menu and setMenu state to App.tsx to allow shared state across components.
Updated ChefScreen to accept menu and setMenu as props, enabling dynamic updates to the menu.
Modified HomeScreen to display the total number of menu items and dynamically render the menu.

Defined a MenuItem type in types.ts for better type safety.
Updated all components to utilize the MenuItem type, ensuring consistent data structures.
Improved TypeScript configurations for stricter type checking.

Resolved issues with form validation in ChefScreen.
Fixed navigation bugs related to FilterScreen and HomeScreen.
Optimized rendering performance by memoizing components where applicable.

Refactoring Notes

State Management Refactor
Before: Each screen (HomeScreen, FilterScreen, ChefScreen) maintained its own local state for the menu, leading to inconsistencies and redundant code.
After: The menu state is now managed centrally in App.tsx and passed down to child components via props. This ensures a single source of truth for the menu data and allows for real-time updates across all screens.
Component Prop Refactoring
Before: Components like ChefScreen and FilterScreen managed their own state and did not communicate with each other.
After: Components now receive menu and setMenu as props, enabling them to interact and update the shared state. This change facilitates better data flow and component reusability.
TypeScript Enhancements
Before: Components used generic JavaScript objects for menu items, leading to potential runtime errors and difficulties in maintaining the codebase.
After: Introduced a MenuItem type in types.ts to define the structure of menu items. All components were updated to use this type, providing compile-time type checking and improving code maintainability.
UI/UX Improvements
Before: The user interface had inconsistent styling, and navigation between screens was not intuitive.
After: Applied consistent styling across all screens, added navigation buttons (Back, Contact, About) to each screen, and replaced static images with remote URLs for better performance and user experience.
.
[MAST-P1.docx](https://github.com/user-attachments/files/23060155/MAST-P1.docx)
.
https://pixabay.com/vectors/burger-pattern-hamburger-burger-7422088/
.
https://youtu.be/DBPlc-jZGRM
.
https://github.com/ST10479848/MASTProject.git
