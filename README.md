# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

##Summary
The Github Blog is a blog that uses the Github repository itself as a database, with the Issues in the repository presented as blog posts.

This project was developed as a challenge for the API communication module, from the React track, from Bootcamp Ignite offered by Rocketseat.

##Functionalities
Display a list of posts extracted from repository issues, showing only the title and partial text;
  Display data from the repository owner;
  It must contain a page to display the entire post content;
  It must be possible to search posts using an argument.

##Prerequisites
  To run the project, you will need to have the following tools installed on your machine: Git, Node.js. Furthermore, it's good to have an editor to work with the code like VSCode.

## Installing

$ git clone https://github.com/thiagotsdelima/githubBlog.git

$ cd github-blog

$ npm install

$ npm run dev

## Technologies
React;
Typescript;
Vite - To speed up the project creation and configuration process;
Axios - Performs communication with the backend through HTTP requests;
react-router-dom - Conducts the routing of pages within the SPA;
Stylef Components - Enables you to write CSS codes within JavaScript;
Date-fns - Date manipulation;
Fortawesome - Icon library;
parse-numeric-range - Number manipulator;
react-hook-form - Form creation and validation;
react-markdown - Text manipulation in markdown;
react-syntax-highlighter - Library for forming code within markdown;
Zod - Library for validating data schemas.

## Utilities
Protótipo: Figma;
Editor: Visual Studio Code;
Fontes: Nunito.