<div align="center">
  <br />
    <a href="https://snapgram-rho.vercel.app" target="_blank">
      <img src="https://github.com/adrianhajdin/social_media_app/assets/151519281/be514a19-3cbb-48b7-9acd-2cf4d2e319c4" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-React_Query-black?style=for-the-badge&logoColor=white&logo=reactquery&color=FF4154" alt="reactquery" />
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  </div>

  <h3 align="center">A Social Media Application</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 📸 [Screenshots](#screenshots)

## <a name="introduction">🤖 Introduction</a>

Explore social media with this user-friendly platform that has a nice look and lots of features. Easily create and explore posts, and enjoy a strong authentication system and quick data fetching using React Query for a smooth user experience.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Appwrite
- React Query
- TypeScript
- Shadcn
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Authentication System**: A robust authentication system ensuring security and user privacy

👉 **Explore Page**: Homepage for users to explore posts, with a featured section for top creators

👉 **Like and Save Functionality**: Enable users to like and save posts, with dedicated pages for managing liked and saved content

👉 **Detailed Post Page**: A detailed post page displaying content and related posts for an immersive user experience

👉 **Profile Page**: A user profile page showcasing liked posts and providing options to edit the profile

👉 **Browse Other Users**: Allow users to browse and explore other users' profiles and posts

👉 **Create Post Page**: Implement a user-friendly create post page with effortless file management, storage, and drag-drop feature

👉 **Edit Post Functionality**: Provide users with the ability to edit the content of their posts at any time

👉 **Responsive UI with Bottom Bar**: A responsive UI with a bottom bar, enhancing the mobile app feel for seamless navigation

👉 **React Query Integration**: Incorporate the React Query (Tanstack Query) data fetching library for, Auto caching to enhance performance, Parallel queries for efficient data retrieval, First-class Mutations, etc

👉 **Backend as a Service (BaaS) - Appwrite**: Utilize Appwrite as a Backend as a Service solution for streamlined backend development, offering features like authentication, database, file storage, and more

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/TarakaKoda/Snapgram.git
cd Snapgram
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_STORAGE_ID=
VITE_APPWRITE_USER_COLLECTION_ID=
VITE_APPWRITE_POST_COLLECTION_ID=
VITE_APPWRITE_SAVES_COLLECTION_ID=
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>constants.index.ts</code></summary>

```typescript
export const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/people.svg",
    route: "/all-users",
    label: "People",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create Post",
  },
];

export const bottombarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create",
  },
];
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply m-0 box-border list-none scroll-smooth p-0;
  }

  body {
    @apply min-h-screen bg-dark-1 font-inter text-white;
  }
}

@layer utilities {
  /* TYPOGRAPHY */
  .h1-bold {
    @apply text-[36px] font-bold leading-[140%] tracking-tighter;
  }

  .h1-semibold {
    @apply text-[36px] font-semibold leading-[140%] tracking-tighter;
  }

  .h2-bold {
    @apply text-[30px] font-bold leading-[140%] tracking-tighter;
  }

  .h3-bold {
    @apply text-[24px] font-bold leading-[140%] tracking-tighter;
  }

  .base-semibold {
    @apply text-[16px] font-semibold leading-[140%] tracking-tighter;
  }

  .base-medium {
    @apply text-[16px] font-medium leading-[140%];
  }

  .base-regular {
    @apply text-[16px] font-normal leading-[140%];
  }

  .body-bold {
    @apply text-[18px] font-bold leading-[140%];
  }

  .body-medium {
    @apply text-[18px] font-medium leading-[140%];
  }

  .small-semibold {
    @apply text-[14px] font-semibold leading-[140%] tracking-tighter;
  }

  .small-medium {
    @apply text-[14px] font-medium leading-[140%];
  }

  .small-regular {
    @apply text-[14px] font-normal leading-[140%];
  }

  .subtle-semibold {
    @apply text-[12px] font-semibold leading-[140%];
  }

  .tiny-medium {
    @apply text-[10px] font-medium leading-[140%];
  }

  /* UTILITIES */
  .invert-white {
    @apply brightness-0 invert transition;
  }

  .flex-center {
    @apply flex items-center justify-center;
  }

  .flex-between {
    @apply flex items-center justify-between;
  }

  .flex-start {
    @apply flex items-center justify-start;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    border-radius: 2px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #09090a;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #5c5c7b;
    border-radius: 50px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #7878a3;
  }

  .common-container {
    @apply custom-scrollbar flex flex-1 flex-col items-center gap-10 overflow-scroll px-5 py-10 md:px-8 lg:p-14;
  }

  /* All Users */
  .user-container {
    @apply flex w-full max-w-5xl flex-col items-start gap-6 md:gap-9;
  }

  .user-grid {
    @apply grid w-full max-w-5xl grid-cols-1 gap-7 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3;
  }

  /* Explore */
  .explore-container {
    @apply custom-scrollbar flex flex-1 flex-col items-center overflow-scroll px-5 py-10 md:p-14;
  }

  .explore-inner_container {
    @apply flex w-full max-w-5xl flex-col items-center gap-6 md:gap-9;
  }

  .explore-search {
    @apply h-12 border-none bg-dark-4 ring-offset-0 placeholder:text-light-4 focus-visible:ring-0 focus-visible:ring-offset-0 !important;
  }

  /* Home */
  .home-container {
    @apply custom-scrollbar flex flex-1 flex-col items-center gap-10 overflow-scroll px-5 py-10 md:px-8 lg:p-14;
  }

  .home-posts {
    @apply flex w-full max-w-screen-sm flex-col items-center gap-6 md:gap-9;
  }

  .home-creators {
    @apply custom-scrollbar hidden w-72 flex-col gap-10 overflow-scroll px-6 py-10  xl:flex 2xl:w-465;
  }

  /* Post Details */
  .post_details-container {
    @apply custom-scrollbar flex flex-1 flex-col items-center gap-10 overflow-scroll px-5 py-10 md:p-14;
  }

  .post_details-card {
    @apply flex w-full max-w-5xl flex-col rounded-[30px] border border-dark-4 bg-dark-2 xl:flex-row xl:rounded-l-[24px];
  }

  .post_details-img {
    @apply h-80 rounded-t-[30px] bg-dark-1 object-cover p-5 lg:h-[480px] xl:w-[48%] xl:rounded-l-[24px] xl:rounded-tr-none;
  }

  .post_details-info {
    @apply flex flex-1 flex-col items-start gap-5 rounded-[30px] bg-dark-2 p-8 lg:gap-7;
  }

  .post_details-delete_btn {
    @apply small-medium lg:base-medium flex gap-3 p-0  text-light-1 hover:bg-transparent hover:text-light-1;
  }

  /* Profile */
  .profile-container {
    @apply custom-scrollbar flex flex-1 flex-col items-center gap-10 overflow-scroll px-5 py-10 md:p-14;
  }

  .profile-inner_container {
    @apply relative flex w-full max-w-5xl flex-col items-center gap-8 md:mb-8 xl:flex-row xl:items-start;
  }

  .profile-tab {
    @apply flex-center w-48 flex-1 gap-3 bg-dark-2  py-4 transition xl:flex-initial;
  }

  /* Saved */
  .saved-container {
    @apply custom-scrollbar flex flex-1 flex-col items-center gap-10 overflow-scroll px-5 py-10 md:p-14;
  }

  /* Bottom bar */
  .bottom-bar {
    @apply flex-between sticky bottom-0 z-50 w-full rounded-t-[20px] bg-dark-2 px-5 py-4 md:hidden;
  }

  /* File uploader */
  .file_uploader-img {
    @apply h-80 w-full rounded-[24px] object-cover object-top lg:h-[480px];
  }

  .file_uploader-label {
    @apply small-regular w-full border-t border-t-dark-4 p-4 text-center text-light-4;
  }

  .file_uploader-box {
    @apply flex-center h-80 flex-col p-7 lg:h-[612px];
  }

  /* Grid Post List */
  .grid-container {
    @apply grid w-full max-w-5xl grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3;
  }

  .grid-post_link {
    @apply flex h-full w-full cursor-pointer overflow-hidden rounded-[24px] border border-dark-4;
  }

  .grid-post_user {
    @apply flex-between absolute bottom-0 w-full gap-2 rounded-b-[24px] bg-gradient-to-t from-dark-3 to-transparent p-5;
  }

  /* Left sidebar */
  .leftsidebar {
    @apply hidden min-w-[270px] flex-col justify-between bg-dark-2 px-6 py-10 md:flex;
  }

  .leftsidebar-link {
    @apply base-medium rounded-lg transition hover:bg-primary-500;
  }

  /* Post Card */
  .post-card {
    @apply w-full max-w-screen-sm rounded-3xl border border-dark-4 bg-dark-2 p-5 lg:p-7;
  }

  .post-card_img {
    @apply mb-5 h-64 w-full rounded-[24px] object-cover xs:h-[400px] lg:h-[450px];
  }

  /* Topbar */
  .topbar {
    @apply sticky top-0 z-50 w-full bg-dark-2 md:hidden;
  }

  /* User card */
  .user-card {
    @apply flex-center flex-col gap-4 rounded-[20px] border border-dark-4 px-5 py-8;
  }
}

@layer components {
  /* SHADCN COMPONENTS */
  /* Form */
  .shad-form_label {
    @apply text-white !important;
  }

  .shad-form_message {
    @apply text-red !important;
  }

  .shad-input {
    @apply h-12 border-none bg-dark-4 ring-offset-light-3 placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 !important;
  }

  .shad-textarea {
    @apply h-36 rounded-xl border-none bg-dark-3 ring-offset-light-3 focus-visible:ring-1 focus-visible:ring-offset-1 !important;
  }

  /* Button */
  .shad-button_primary {
    @apply flex gap-2 bg-primary-500 text-light-1 hover:bg-primary-500 !important;
  }

  .shad-button_dark_4 {
    @apply flex h-12 gap-2 bg-dark-4 px-5 text-light-1 !important;
  }

  .shad-button_ghost {
    @apply flex items-center justify-start gap-4 hover:bg-transparent hover:text-white !important;
  }
}
```

</details>

<details>
<summary><code>queryKeys.ts</code></summary>

```typescript
export enum QUERY_KEYS {
  // AUTH KEYS
  CREATE_USER_ACCOUNT = "createUserAccount",

  // USER KEYS
  GET_CURRENT_USER = "getCurrentUser",
  GET_USERS = "getUsers",
  GET_USER_BY_ID = "getUserById",

  // POST KEYS
  GET_POSTS = "getPosts",
  GET_INFINITE_POSTS = "getInfinitePosts",
  GET_RECENT_POSTS = "getRecentPosts",
  GET_POST_BY_ID = "getPostById",
  GET_USER_POSTS = "getUserPosts",
  GET_FILE_PREVIEW = "getFilePreview",

  //  SEARCH KEYS
  SEARCH_POSTS = "getSearchPosts",
}
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-500": "#877EFF",
        "primary-600": "#5D5FEF",
        "secondary-500": "#FFB620",
        "off-white": "#D0DFFF",
        red: "#FF5A5A",
        "dark-1": "#000000",
        "dark-2": "#09090A",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
      },
      screens: {
        xs: "480px",
      },
      width: {
        420: "420px",
        465: "465px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

</details>

<details>
<summary><code>types.index.ts</code></summary>

```typescript
export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};
```

</details>

<details>
<summary><code>useDebounce.ts</code></summary>

```typescript
import { useEffect, useState } from "react";

// https://codesandbox.io/s/react-query-debounce-ted8o?file=/src/useDebounce.js
export default function useDebounce<T>(value: T, delay: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
}
```

</details>

<details>
<summary><code>utils.ts</code></summary>

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

//
export const multiFormatDateString = (timestamp: string = ""): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  switch (true) {
    case Math.floor(diffInDays) >= 30:
      return formatDateString(timestamp);
    case Math.floor(diffInDays) === 1:
      return `${Math.floor(diffInDays)} day ago`;
    case Math.floor(diffInDays) > 1 && diffInDays < 30:
      return `${Math.floor(diffInDays)} days ago`;
    case Math.floor(diffInHours) >= 1:
      return `${Math.floor(diffInHours)} hours ago`;
    case Math.floor(diffInMinutes) >= 1:
      return `${Math.floor(diffInMinutes)} minutes ago`;
    default:
      return "Just now";
  }
};

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
```

</details>

## <a name="links" target="_blank">🔗 Links</a>

Assets used in the project are [here](https://drive.google.com/file/d/13_7FofRAC3wARqPtAVPi53QNJJRd5RH_/view?usp=sharing)

## <a name="screenshots"> 📸 Screenshots </a>

<div align="center">
<table>
  <tr>
    <th colspan="2">📄 SIGN UP PAGE</th>
  </tr>
    <tr>
    <td colspan="2">
      <p align="left">Desktop View 💻</p>
      <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/057b6e3f-295e-467f-a2bb-3ac1672f8b54" alt="Signup Page" class="img-fluid">
    </td>
  </tr>
  <tr>
    <td>
      <p align="left">Tablet View 📱</p>
      <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/61cb553a-841f-483c-97b2-72cb9fcfc247" alt="Signup Page" class="img-fluid">
    </td>
    <td>
      <p align="left">Mobile View 📱</p>
      <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/b9c74841-4c0c-464a-aa8e-10be519b5810" alt="Signup Page Mobile View"  class="img-fluid">
    </td>
  </tr>
</table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">📃 SIGN IN PAGE</th>
    </tr>
    <tr>
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/889d55ce-9c00-4c38-91eb-6c736163e0a9" alt="Sign in Page"  class="img-fluid">
      </td>
    </tr>
    <tr>
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/24cca89f-a462-4a74-94df-9f7d61f9a1a5" alt="Sign in Page"  class="img-fluid">
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/2fd7f796-34e3-49f7-87ed-4fcb6d36eb80" alt="Sign in Page Mobile view"  class="img-fluid">
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">🏠 HOME PAGE</th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/49d037ec-8dec-4c6d-8d96-c1e47afc214b" alt="Home Page Desktop View"  class="img-fluid">
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/492979af-c7fb-4ea8-be6f-028cc2f6f89b" alt="Home Page Tablet View" class="img-fluid">
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/5b31c399-2f36-4dd0-aed7-879da6edd8e5" alt="Home Page Mobile View"  class="img-fluid">
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">❤️ Like Functionality</th>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/f4e5c290-a9f5-4cab-969f-70a24ec23e7a" alt="Post Mobile View"  class="img-fluid">
      </td>
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/0a98187d-72d1-4e53-82fb-49079898a14b" alt="Liked Post Tablet View"  class="img-fluid">
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/d4b57239-3847-488b-8960-473cecf3f71b" alt="All Users who liked the post Desktop View"  class="img-fluid">
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">💾 Save Functionality</th>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/df081ddb-4d8d-4fe4-af2b-a0429aa78c08" alt="Saving a Post Mobile View" class="img-fluid">
      </td>
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/ee340693-501a-4c93-8a5a-fa29187da59f" alt="Saved Post Tablet View"  class="img-fluid">
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/ee58bb97-c573-40f4-a260-a661423ef839" alt="Saved Posts Page Desktop View"  class="img-fluid">
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">🖼️ Detailed Post</th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/a80db91a-d179-4be0-a7cf-28836d930162" alt="Post details Desktop View"  class="img-fluid">
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/7863fbc3-f5fb-49ff-9651-05daedbc1ba1" alt="Post Details Tablet View" class="img-fluid">
      </td>
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/96129d39-5b17-4c01-807a-c1f87c295336" alt="Post Details Mobile View" class="img-fluid">
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">👤 Profile & 📝 Edit Profile </th>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/6a7d45da-63c5-49aa-ba31-d8062ad7e77c" alt="Profile Desktop View"  class="img-fluid">
      </td>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/9ef9cf96-6f01-417a-98d5-8ff17a1c06ba" alt="Profile Mobile View" class="img-fluid">
      </td>
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/4d0c7041-2cf5-4797-aed6-7909fcee01b1" alt="Edit Profile Tablet View"  class="img-fluid">
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">👥 All Users </th>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/f2b0a053-9e52-4c70-8187-05e58be382da" alt="All Users Mobile View"  class="img-fluid">
      </td>
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/a788d633-7a22-4751-bd17-12cc5f118af1" alt="All Users Tablet View" class="img-fluid">
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/e62fcf60-475b-43a0-a7d7-429bd3f7074f" alt="All Users Desktop View"  class="img-fluid">
      </td>
    </tr>
  </table>
  <br />
</div>
<div align="center">
  <table>
    <tr>
      <th colspan="2">🖼️ Create & 📝 Update Post </th>
    </tr>
    <tr align="center">
      <td>
        <p align="left">Mobile View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/cfb28a2a-2b3d-4216-8e98-98d4d2e66524" alt="Create Post Mobile View"  class="img-fluid">
      </td>
      <td>
        <p align="left">Tablet View 📱</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/171a3e9e-a4e0-47fb-9f7a-e5b16bf20327" alt="Create Post Tablet View"  class="img-fluid">
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
        <p align="left">Desktop View 💻</p>
        <img src="https://github.com/TarakaKoda/Snapgram/assets/122253973/d73c9629-a483-41ee-8ba6-7cc4e50e479a" alt="Update Post Desktop View" class="img-fluid">
      </td>
    </tr>
  </table>
  <br />
</div>
