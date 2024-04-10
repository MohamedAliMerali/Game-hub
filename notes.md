# Course project Notes

# TODO

- make a service to get vropped images.
- make a hook to fetch games instead of services.

# Setting up the project

First of all we create new react project with vite and we install all of our dependencies, then we initialize a git repository.

- **`npm create vite@latest`**
- name it and choose a framework (react for our case)
- cd Game-hub (navigate to the project)
- npm i (to install the dependencies)

Git commands:

- git init
- git add . <!-- add all the changes of the current directory to the staging area -->
- git commit -m "Initial commit" <!--  -->
-

# Installing Tailwind Css / chakra UI

## chakra UI (coming later)

## Tailwind + Vite

### 01 - Create your project

Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use **`Create Vite`**.

```cmd
> npm create vite@latest my-project -- --template react
> cd my-project
```

### 02 - Install Tailwind CSS

Install **tailwindcss** and its peer dependencies, then generate your **`tailwind.config.js`** and **`postcss.config.js files`**.

```cmd
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p
```

### 03 - Configure your template paths

Add the paths to all of your template files in your **`tailwind.config.js`** file.

```js
/** @type {import('tailwindcss').Config} \*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 04 - Add the Tailwind directives to your CSS

Add the **`@tailwind`** directives for each of Tailwind’s layers to your **`./src/index.css`** file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 05 - Start your build process

Run your build process with npm run dev.

```cmd
> npm run dev
```

### 06 - Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

```tsx
export default function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
```
