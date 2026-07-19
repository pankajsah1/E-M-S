# Employee Management System

A simple Employee Management System built with **React.js** to strengthen my understanding of React concepts and improve my problem-solving and state management skills. This project focuses on implementing role-based authentication and task management using React's Context API.

## 🚀 Features

- 🔐 Role-based Login Authentication
- 👨‍💼 Admin Dashboard
- 👨‍💻 Employee Dashboard
- 📝 Admin can assign tasks to employees
- 📊 Employees can view their assigned tasks
- 💾 Local Storage-based authentication and data persistence
- ⚡ Context API for global state management
- 🎨 Responsive and clean user interface

## 🛠️ Tech Stack

- React.js
- Context API
- JavaScript (ES6+)
- HTML5
- CSS3
- Local Storage

## 📂 Project Overview

The application uses email and password authentication, where user credentials are stored in the browser's **Local Storage**.

After a successful login, the application automatically redirects users based on their role:

### Admin

- Login as an Admin
- View the Admin Dashboard
- Assign new tasks to employees

### Employee

- Login as an Employee
- Access the Employee Dashboard
- View assigned tasks

The project demonstrates how Context API can be used for managing global application state without external state management libraries.

## 🎯 Purpose of the Project

The primary goal of building this project was to enhance my React.js fundamentals and improve my logical thinking while working with:

- Component-based architecture
- State management
- Context API
- Props and component communication
- Conditional rendering
- Authentication flow
- Local Storage
- Reusable UI components

## 📁 Folder Structure

```bash
src/
│── components/
│── context/
│── utils/
│── App.jsx
│── main.jsx
```

## 🔑 Authentication

The project uses Local Storage to store user credentials and login information.

Different dashboards are rendered depending on the logged-in user's role:

- Admin
- Employee

## 📸 Screenshots

> Add screenshots of:
- Login Page
- Admin Dashboard
- Employee Dashboard
- Task Assignment Screen

## 🔮 Future Improvements

- Backend integration (Node.js + Express)
- MongoDB database
- JWT Authentication
- Password hashing
- CRUD operations for employees
- Edit/Delete tasks
- Task status updates
- Search and filtering
- Notifications
- Responsive improvements

## ▶️ Getting Started

Clone the repository

```bash
git clone https://github.com/your-username/Employee-Management-System.git
```

Navigate to the project folder

```bash
cd Employee-Management-System
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

## 📚 What I Learned

While building this project, I gained hands-on experience with:

- React Hooks
- Context API
- State lifting
- Component composition
- Authentication logic
- Local Storage
- Conditional Rendering
- React project structure
- Managing application flow based on user roles

## 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

## 📄 License

This project is created for learning purposes.
