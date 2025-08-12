# Project Overview: fixsleep

This document provides a comprehensive overview of the `fixsleep` mobile application project, intended to guide AI models and developers in understanding its architecture, conventions, and key components.

## 1. Project Description

`fixsleep` is a mobile application designed to help users improve their sleep quality. It offers features such as sleep cycle calculation, ambient sound playback, alarms, and personalized reminders.

## 2. Core Technologies

- **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **UI:** [Tailwind CSS](https://tailwindcss.com/) with [NativeWind](https://www.nativewind.dev/) for styling.
- **Routing:** [Expo Router](https://expo.github.io/router/) for file-based navigation.
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) for global state management.
- **Internationalization (i18n):** [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/) for multi-language support.
- **Storage:** [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) for persistent storage.
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 3. Project Structure

The project follows a feature-based directory structure, with a clear separation of concerns.

```
/
├── src/
│   ├── app/                # Application screens and routing (Expo Router)
│   │   ├── (tabs)/         # Main tab navigator layout and screens
│   │   ├── onboarding/     # Onboarding flow screens
│   │   └── ...
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Basic UI elements (buttons, text, etc.)
│   │   └── ...
│   ├── constants/          # Static data and constants (colors, icons, etc.)
│   ├── i18n/               # Internationalization setup
│   ├── lib/                # Utility functions and helpers
│   ├── store/              # Zustand stores for state management
│   └── types/              # TypeScript type definitions
├── assets/                 # Static assets (images, fonts, audio)
├── locales/                # Language-specific translation files (en.json, fr.json)
├── package.json            # Project dependencies and scripts
└── tailwind.config.js      # Tailwind CSS configuration
```

## 4. Key Architectural Concepts

### 4.1. Routing and Navigation

The application uses **Expo Router** for its navigation, which is based on the file system. The main navigation is a tab bar, defined in `src/app/(tabs)/_layout.tsx`. The tab bar itself is a custom component found in `src/components/TabBar.tsx`.

### 4.2. State Management

Global state is managed using **Zustand**. The stores are defined in `src/store/appStore.ts` and are persisted using `react-native-mmkv`. Each store is responsible for a specific piece of state (e.g., `useLanguageStore`, `useAlarmStore`).

### 4.3. Styling

The UI is styled using **Tailwind CSS** with **NativeWind**. Custom colors, fonts, and other theme-related configurations are defined in `tailwind.config.js` and `src/constants/colors.ts`. Global styles are defined in `global.css`.

### 4.4. Internationalization

The application supports multiple languages using **i18next**. Translation files are located in the `locales` directory. The i18n initialization and configuration can be found in `src/i18n/index.ts`.

### 4.5. Path Aliases

The project uses a path alias `@/*` which maps to the root directory. This should be used for cleaner imports. For example: `import MyComponent from '@/src/components/MyComponent';`.

## 5. Development Workflow

- **Installation:** `npm install`
- **Running the app:**
  - `npm start`: Starts the Expo development server.
  - `npm run android`: Runs the app on an Android emulator or device.
  - `npm run ios`: Runs the app on an iOS simulator or device.
- **Linting:** `npm run lint`
- **Testing:** `npm run test`

## 6. Coding Conventions and Syntax Patterns

- **File Naming:**
  - React components are named in `PascalCase` (e.g., `AlarmCard.tsx`).
  - Other files (utilities, constants, etc.) are named in `camelCase` (e.g., `formatTime.ts`, `cyclesData.ts`).

- **Component Naming:** React components are named in `PascalCase` (e.g., `AlarmCard`).

- **Variable and Function Naming:** Variables and functions are named in `camelCase` (e.g., `isEnabled`, `handlePress`, `formatTime`).

- **Styling:**
  - Styling is done primarily with Tailwind CSS classes within the `className` prop.
  - Conditional classes are applied using template literals (e.g., `` `border-2 ${isEnabled ? 'border-[#C4A9F2]' : 'border-primary'}` ``).
  - Colors from the custom theme are used in `Switch` components (e.g., `trackColor={{ false: color.background, true: color.accent }}`).

- **State Management:**
  - Local component state is managed with the `useState` hook (e.g., `const [isEnabled, setIsEnabled] = useState(false);`).
  - Zustand stores are used for global state, as seen in `appStore.ts`.

- **Imports:**
  - The `@/*` path alias is used for imports from the `src` directory (e.g., `import color from "@/src/constants/colors";`).

- **Syntax:**
  - The code consistently uses modern JavaScript/TypeScript features, including:
    - Arrow functions for component and function definitions.
    - `const` and `let` for variable declarations.
    - Destructuring for props and state.
    - Optional chaining (`?.`).
    - Template literals for string formatting.

- **Exports:**
  - Components are exported using `export default`.
  - Utility functions are exported using named exports.

## 7. Data Structures

### 7.1. Alarm

The application stores a list of alarms in local storage. The data structure for a single alarm is as follows:

**Example JSON:**

```json
{
  "id": "1678886400000",
  "time": "08:00",
  "label": "Work and Fun",
  "days": [1, 2, 3, 4, 5],
  "isEnabled": true,
  "sound": "rainfall"
}
```

**TypeScript Type:**

```typescript
export type Alarm = {
  id: string;          // Unique ID (e.g., timestamp or UUID)
  time: string;        // Time in HH:mm format
  label: string;       // User-defined label
  days: number[];      // Array of numbers representing days (0=Sun, 1=Mon, ...)
  isEnabled: boolean;  // Is the alarm active?
  sound: string;       // Name of the sound file
};
```