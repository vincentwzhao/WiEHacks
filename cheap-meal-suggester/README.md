# Cheap Meal Suggester

## Overview
The Cheap Meal Suggester is a web application that allows users to input their nutrition facts and receive suggestions for affordable meals or recipes based on that input. The application is built using React for the client-side and Node.js with Express for the server-side.

## Features
- User-friendly interface for entering nutrition facts.
- Dynamic recipe suggestions based on user input.
- Responsive design for accessibility on various devices.

## Project Structure
```
cheap-meal-suggester
├── client
│   ├── public
│   │   └── index.html
│   └── src
│       ├── App.tsx
│       ├── index.tsx
│       ├── components
│       │   ├── NutritionForm.tsx
│       │   ├── RecipeCard.tsx
│       │   └── SuggestionsList.tsx
│       ├── pages
│       │   └── Home.tsx
│       ├── hooks
│       │   └── useSuggestions.ts
│       └── types
│           └── index.ts
├── server
│   ├── src
│   │   ├── index.ts
│   │   ├── controllers
│   │   │   └── suggestController.ts
│   │   ├── routes
│   │   │   └── suggest.ts
│   │   ├── services
│   │   │   └── suggestionService.ts
│   │   └── data
│   │       └── recipes.json
│   └── package.json
├── package.json
├── tsconfig.json
├── .env.example
├── .eslintrc.json
└── jest.config.js
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd cheap-meal-suggester
   ```
3. Install dependencies for the client:
   ```
   cd client
   npm install
   ```
4. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

### Running the Application
1. Start the server:
   ```
   cd server
   npm start
   ```
2. In a new terminal, start the client:
   ```
   cd client
   npm start
   ```

### Usage
- Open your browser and navigate to `http://localhost:3000`.
- Enter your nutrition facts in the provided form.
- View the suggested recipes based on your input.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.