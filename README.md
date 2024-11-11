# Stock Market App

## Overview

The Stock Market App is a React Native application that provides real-time stock information for companies listed on the NASDAQ exchange. Users can search for specific stocks, view detailed information for each stock, and seamlessly scroll through a list of companies. The app utilizes the Polygon.io API to retrieve stock data, with rate limiting and caching handled by an NGINX server to optimize performance and manage API usage effectively.

## Features

- **Real-Time Stock Information**: Displays real-time data for stocks listed on the NASDAQ.
- **Search Functionality**: Allows users to search for specific stocks in real-time.
- **Infinite Scrolling**: Users can scroll through stock listings, with data dynamically loaded as needed.
- **Error Handling**: Gracefully handles API rate limits, displaying user-friendly notifications.
- **Rate Limiting and Caching**: Implemented on the NGINX server to reduce API requests and improve performance.

## System Architecture

### Components

#### 1. React Native Client App

The main mobile app provides a rich UI experience, including:

- **Search Input**: A debounced search bar for querying stock information.
- **Stock List**: An infinite-scrolling list of stock cards.
- **Error Handling**: Client-side handling for API rate limits and network errors.

#### 2. NGINX Proxy Server

Configured as a reverse proxy to:

- Manage rate limiting.
- Handle response caching.
- Provide security and API key management.

### Architecture Diagram

```plaintext
+-------------------------+      +-------------------------+       +--------------------------+
| React Native Client App | ---> |       NGINX Server      | ----> |     Polygon.io API       |
|                         |      |   (acts as proxy)       |       |                          |
+-------------------------+      +-------------------------+       +--------------------------+
```

React Native Client App: Sends requests to the NGINX server for stock data.
NGINX Server: Acts as a proxy and directs requests to the Polygon API while managing API keys, rate limiting, and caching.
Polygon.io API: Provides stock data for the NASDAQ exchange. Responses are sent back to the NGINX server, then returned to the client app.

## Project Architecture

The project follows a module-based structure to improve organization, scalability, and maintainability. Each feature or logical grouping of code is divided into modules with the following structure:

```
src/
│
├── modules/
│   ├── common/                  # Shared functionality across modules
│   │   ├── api/                # Common API utilities and configurations
│   │   ├── hooks/              # Shared hooks used across the application
│   │   ├── types/              # Common TypeScript types and interfaces
│   │   ├── utils/              # Utility functions used across the app
│   │   ├── styles/             # Global styles and themes
│   │   └── context/            # Shared context providers and state management
│   │
│   ├── stocks/                 # Stocks feature module
│   │   ├── api/                # Stock-specific API calls
│   │   ├── hooks/              # Stock-specific hooks
│   │   ├── components/         # Stock UI components
│   │   ├── types/              # Stock-related types
│   │   ├── utils/              # Stock utility functions
│   │   ├── styles/             # Stock component styles
│   │   └── context/            # Stock state management
│   │
│   └── other-modules/          # Other feature modules
│
└── App.tsx                     # Root component
```

### Module Structure

Each module follows a consistent structure:

#### 1. API Layer (`api/`)

- Defines endpoints
- Manages API requests

#### 2. Hooks (`hooks/`)

- Custom hooks for component logic
- Data fetching hooks
- State management hooks

#### 3. Components (`components/`)

- Reusable UI components
- Feature-specific components
- Component composition

#### 4. Types (`types/`)

- TypeScript interfaces
- Type definitions
- Shared types

#### 5. Utils (`utils/`)

- Helper functions
- Data transformations
- Common utilities

#### 6. Styles (`styles/`)

- Component styles
- Theme definitions
- Shared styles

#### 7. Context (`context/`)

- State management
- Context providers
- State actions

This modular approach provides:

- Clear separation of concerns
- Improved code organization
- Better maintainability
- Easy scalability
- Reusable components

Technologies Used
React Native: Mobile app framework for cross-platform development.
NGINX: Used as a reverse proxy server to manage API requests with rate limiting and caching.
Polygon.io API: External API providing stock data for the NASDAQ exchange.
Axios: Promise-based HTTP client for API requests.
TypeScript: Provides type safety in the codebase.
Notes
API Rate Limiting: The NGINX server handles rate limiting to prevent exceeding API quotas.
Caching: NGINX caches API responses to improve performance and reduce unnecessary API calls.
Environment Variables: Use react-native-config for handling sensitive information in environment variables.

Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

#### For All Platforms

- Node.js (v18 or newer)
- npm or yarn
- Git
- React Native CLI (`npm install -g react-native-cli`)

#### For Android Development

- Java Development Kit (JDK) 11 or newer
- Android Studio
- Android SDK (minimum API 21)
- Android NDK
- Android SDK Platform-Tools
- Android SDK Build-Tools
- Android Emulator or Physical Device

#### For iOS Development (macOS only)

- Xcode (latest version)
- CocoaPods
- iOS Simulator or Physical Device
- Command Line Tools for Xcode

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/KarimHesham/Nasdaq-Marketplace.git
cd NasdaqMarketplace
```

2. **Install Dependencies**

```bash
# Install npm packages
npm install

# For iOS development (macOS only)
cd ios && pod install && cd ..
```

3. **Run the App**

For Android:

```bash
# Start Metro bundler
npm start

# In a new terminal, run the Android app
npm run android
```

For iOS (macOS only):

```bash
# Start Metro bundler
npm start

# In a new terminal, run the iOS app
npm run ios
```

### Troubleshooting

- If you encounter build errors on Android, try:

  - Cleaning the gradle build: `cd android && ./gradlew clean`
  - Ensuring ANDROID_HOME is set correctly in your environment
  - Updating Android SDK tools through Android Studio

- For iOS issues:
  - Clean the build folder: `cd ios && xcodebuild clean`
  - Re-install pods: `cd ios && pod deintegrate && pod install`
  - Ensure Xcode command line tools are installed: `xcode-select --install`
