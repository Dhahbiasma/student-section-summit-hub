# Student Section Summit

## Project Info

**Website URL**: [https://sss-summit-hub-main.vercel.app/](https://sss-summit-hub-main.vercel.app/)

This is the official website for the **Student Section Summit**, providing students with information, updates, and resources related to the summit.

---

## How to Edit This Project

You can make changes to the website in several ways:

### 1. Using Your Local IDE

Ensure you have **Node.js** and **npm** installed (recommended via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Go into the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server with live reload
npm run dev
```

### 2. Edit Files Directly on GitHub

* Navigate to the file you want to change.
* Click the pencil icon to edit.
* Commit your changes directly to the repository.

### 3. Using GitHub Codespaces

* Go to the main page of your repository.
* Click **Code** → **Codespaces** → **New codespace**.
* Edit files and commit changes from within the Codespace.

---

## Technologies Used

This project is built with:

* Vite
* TypeScript
* React
* Tailwind CSS
* shadcn-ui

---

## Deployment

This site is hosted on **Vercel**. To deploy updates:

1. Push your changes to the repository.
2. Vercel automatically rebuilds and updates the live site.

---

## Custom Domain

You can connect a custom domain via **Vercel** settings if needed.

---

## HTML Entry Point

Your main site HTML (`index.html`) is structured as follows:

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Student Section Summit</title>
  <meta name="description" content="Official Student Section Summit Website" />
  <meta name="author" content="ATAST" />

  <!-- Open Graph -->
  <meta property="og:title" content="Student Section Summit" />
  <meta property="og:description" content="Official Student Section Summit Website" />
  <meta property="og:type" content="website" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/logo_atast.ico" />
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

This file serves as the main entry point for your React application.
