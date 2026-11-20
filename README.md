
# React Firebase Assignment

## Student Information
- **Name:** Sanjida Ali
- **Student ID:** C-243454


## Project Description

This project implements the assignment requirements:
- React Router navigation
- Home, Login, Register, Dashboard and Profile pages
- Firebase Email/Password registration and login
- Logout
- Protected Dashboard and Profile routes
- Authentication state after page refresh

## Setup

1. Install Node.js LTS.
2. Open this project in VS Code.
3. Run:

   ```bash
   npm install
   ```

4. Create a Firebase project.
5. Add a Web App in Firebase.
6. Enable Authentication > Sign-in method > Email/Password.
7. Copy the Firebase Web App config into `src/firebase.js`.
8. Run:

   ```bash
   npm run dev
   ```

## Routes

- `/` Home
- `/login` Login
- `/register` Register
- `/dashboard` Protected Dashboard
- `/profile` Protected Profile

No database is used because the assignment requires Firebase Authentication only.
