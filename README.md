# Basic template for React small projects
This template is for make initial React projects focused on small systems, use it when you need begin a project

## Technologies
The main technologies used are:
- ReactJS
- Typescript
- Tailwind
- Zustand
- Vite

## Folder structure
The project folder structure is

```
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components          # Reusable components
│   ├── config              # Global configurations
│   │   └── routes.tsx
│   ├── hooks               # Custom hooks
│   ├── layouts             # General layout components
│   ├── pages               # Application pages
│   │   └── Home
│   │       └── HomePage.tsx
│   ├── services            # Business logic or API services
│   ├── store               # State management (e.g., Redux)
│   ├── styles              # Global CSS or SASS files
│   │   └── index.css
│   ├── utils               # Utilities and helper functions
│   ├── App.tsx             # Main application entry point
│   ├── main.tsx            # Main file that mounts the application
│   └── vite-env.d.ts
├── README.md
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── .eslint.config.js       # ESLint configuration file (note the dot at the beginning)
├── .prettier.config.js     # Prettier configuration file (if you use it)
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # TailwindCSS configuration
└── yarn.lock
```

### Explanation of the organization:
- ```public/```: Public static files. You can add other static files like images, icons, etc., here.

- ```src/```: Contains all the source code of the application.

  - ```assets/```: Static files that can be imported into components, like images or fonts.
  - ```components/```: Reusable components across the application.
  - ```config/```: Global configurations, like routes or environment settings.
  - ```hooks/```: Custom hooks that encapsulate reusable logic.
  - ```layouts/```: General layout components that structure the pages.
  - ```pages/```: Contains the different pages of the application, organized in folders by page.
  - ```services/```: Functions or classes that contain business logic, such as API calls.
  - ```store/```: State management, ideal for placing files related to Redux or other state managers.
  - ```styles/```: Global style files, such as CSS or SASS.
  - ```utils/```: Utility functions and helpers.
- Root files:
    - Files like ```index.html```, ```package.json```, and various configurations like ESLint, Prettier, and TailwindCSS are kept at the root for easy access and configuration.

This organization is designed to keep the code clean and modular, making the project easier to maintain and scale.

## Commands
### How to install dependencies?
Run ```yarn install``` to add ```node_modules``` folder

### How to start the project?
Run ```yarn dev``` and the app runs in [localhost:5172](http://localhost:5172)