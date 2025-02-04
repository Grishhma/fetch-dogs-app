# Fetch Dogs App 🐶

Fetch Dogs App is a web application designed to help dog lovers search through a database of shelter dogs with the goal of finding a perfect adoption match. The app features user authentication, dog search with filtering, sorting, pagination, and the ability to select favorites and generate a match.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication:** 🔐  
  Log in using your name and email. The authentication API sets an HttpOnly cookie for secure access.
  
- **Dog Search:** 🔍  
  Browse shelter dogs with options to filter by breed, sort by breed, name, or age, and paginate through results.
  
- **Favorites and Matching:** ❤️  
  Select your favorite dogs and generate an adoption match from your selection.
  
- **Responsive Design:** 📱💻  
  Built with Material‑UI for a clean, responsive user interface.

## 🛠️ Tech Stack

- **Frontend:**  
  - React ⚛️
  - React Router 🔀
  - Material‑UI 🎨
  - Axios ⚡
  
- **API:**  
  Interacts with a backend API to securely handle user authentication, search for shelter dogs, and generate matching recommendations.
  
- **Deployment:**  
  Deployed on GitHub Pages 🚀.

## ⚙️ Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://yarnpkg.com/) or npm

### Clone the Repository

```bash
git clone https://github.com/Grishhma/fetch-dogs-app.git
cd fetch-dogs-app
```

### Install Dependencies
```bash
yarn install
```
Run the App Locally
Start the development server:

Using Yarn:
```bash
yarn start
```
Open http://localhost:3000 in your browser to view the app.

## 🚀 Usage
- **Login:**
On the login page, enter your name and email to authenticate. Upon a successful login, you will be redirected to the search page.

- **Search for Dogs:**
Use the search interface to filter by breed, sort results, and paginate through available shelter dogs.

- **Favorites and Matching:**
Click on a dog card to add it to your favorites. After selecting favorites, click on "Generate Match with Favorites" to see your adoption match.

## 🌐 Deployment
This app is deployed on GitHub Pages.

Live Site:
https://grishhma.github.io/fetch-dogs-app/
