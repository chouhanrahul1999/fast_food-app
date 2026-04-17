# 🍔 Fast Food App

A full-stack mobile food ordering app built with React Native and Expo. Users can browse food categories, search menu items, customize orders, manage their cart, and place orders — all with a clean and modern UI.

---

## 📱 Features

- **Authentication** — Sign up and sign in with email and password using Appwrite
- **Home Screen** — Browse offer cards (Summer Combo, Burger Bash, Pizza Party, Burrito Delight) that navigate to filtered search results
- **Search & Filter** — Search menu items by name and filter by category (Burgers, Pizzas, Burritos, Wraps, Bowls, Sandwiches)
- **Menu Cards** — Browse food items with images, prices, and ratings
- **Cart** — Add items to cart, increase/decrease quantity, remove items, and view payment summary with delivery fee and discount
- **Password Visibility Toggle** — Eye icon to show/hide password on sign in and sign up screens

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React Native](https://reactnative.dev/) | Cross-platform mobile framework |
| [Expo](https://expo.dev/) | Development platform and tooling |
| [Expo Router](https://expo.github.io/router/) | File-based navigation |
| [Appwrite](https://appwrite.io/) | Backend — authentication, database, storage |
| [NativeWind](https://www.nativewind.dev/) | Tailwind CSS for React Native |
| [Zustand](https://zustand-demo.pmnd.rs/) | Global state management |
| [Lucide React Native](https://lucide.dev/) | Icons |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |

---

## 📁 Project Structure

```
fast_food-app/
├── app/
│   ├── (auth)/             # Authentication screens
│   │   ├── sign-in.tsx
│   │   └── sign-up.tsx
│   ├── (tabs)/             # Main app tabs
│   │   ├── index.tsx       # Home screen
│   │   ├── Search.tsx      # Search & filter screen
│   │   ├── Cart.tsx        # Cart screen
│   │   └── Profile.tsx     # Profile screen
│   └── index.tsx           # Root redirect based on auth state
├── components/             # Reusable components
│   ├── Button.tsx
│   ├── CartButton.tsx
│   ├── CartItem.tsx
│   ├── Filter.tsx
│   ├── InputBox.tsx        # Input with eye icon for passwords
│   ├── MenuCard.tsx
│   └── SearchBar.tsx
├── constants/              # App constants, offers, categories
├── lib/
│   ├── appwrite.ts         # Appwrite client and API functions
│   ├── data.ts             # Dummy seed data
│   ├── seed.ts             # Database seeding script
│   └── useAppwrite.tsx     # Custom hook for Appwrite queries
├── store/
│   ├── auth.store.ts       # Authentication state (Zustand)
│   └── cart.store.ts       # Cart state (Zustand)
└── type.d.ts               # TypeScript type definitions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Expo CLI
- Appwrite account

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd fast_food-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_users_collection_id
EXPO_PUBLIC_APPWRITE_CATEGORIES_ID=your_categories_collection_id
EXPO_PUBLIC_APPWRITE_MENU_COLLECTION_ID=your_menu_collection_id
EXPO_PUBLIC_APPWRITE_CUSTOMIZATION_COLLECTION_ID=your_customization_collection_id
EXPO_PUBLIC_APPWRITE_MENU_CUSTOMIZATION_COLLECTION_ID=your_menu_customization_collection_id
EXPO_PUBLIC_APPWRITE_BUCKET_ID=your_bucket_id
```

### 4. Set up Appwrite

Create the following collections in your Appwrite database:

- **users** — `accountId`, `name`, `email`, `avatar`
- **categories** — `name`, `description`
- **menu** — `name`, `description`, `image_url`, `price`, `rating`, `calories`, `protein`, `categories`
- **customizations** — `name`, `price`, `type`
- **menu_customizations** — `menu`, `customizations`

### 5. Seed the database

Run the app and tap the **Seed** button on the Search screen to populate the database with sample data.

### 6. Start the app

```bash
npx expo start
```

Then press:
- `a` for Android emulator
- `i` for iOS simulator
- Scan QR code with Expo Go on your phone

---

## 🗄 Database Schema

```
users
  └── accountId, name, email, avatar

categories
  └── name, description

menu
  └── name, description, image_url, price, rating, calories, protein
  └── categories (relation → categories)

customizations
  └── name, price, type (topping | side)

menu_customizations
  └── menu (relation → menu)
  └── customizations (relation → customizations)
```

---

## 🔐 Authentication Flow

1. User signs up → Appwrite creates account + user document in database
2. User signs in → Appwrite creates session → user fetched from database → stored in Zustand
3. Root `index.tsx` checks `isAuthenticated` → redirects to tabs or sign-in
4. Auth layout redirects authenticated users away from auth screens

---

## 📦 Key Dependencies

```json
"expo": "~54.0.33",
"expo-router": "~6.0.23",
"nativewind": "^4.2.1",
"tailwindcss": "^3.4.19",
"react-native-appwrite": "^0.20.0",
"zustand": "latest",
"lucide-react-native": "latest",
"clsx": "^2.1.1"
```
