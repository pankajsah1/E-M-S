const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a responsive landing page using React and Tailwind CSS.",
        taskDate: "2026-06-30",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the authentication issue preventing users from logging in.",
        taskDate: "2026-07-01",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update project README with installation instructions.",
        taskDate: "2026-06-25",
        category: "Documentation",
      },
    ],
  },
  {
    id: 2,
    firstName: "Aman",
    email: "employee2@gmail.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build the employee dashboard UI.",
        taskDate: "2026-07-02",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend REST APIs.",
        taskDate: "2026-06-28",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write Jest test cases for authentication module.",
        taskDate: "2026-06-24",
        category: "Testing",
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@gmail.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Database",
        taskDescription: "Improve SQL query performance.",
        taskDate: "2026-07-03",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Develop the employee profile page.",
        taskDate: "2026-07-04",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Verification",
        taskDescription: "Verify all reported UI bugs.",
        taskDate: "2026-06-26",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@gmail.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure GitHub Actions for deployment.",
        taskDate: "2026-07-05",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Components",
        taskDescription: "Improve code readability of React components.",
        taskDate: "2026-06-22",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Audit",
        taskDescription: "Check for vulnerabilities in authentication flow.",
        taskDate: "2026-06-27",
        category: "Security",
      },
    ],
  },
  {
    id: 5,
    firstName: "Sneha",
    email: "employee5@gmail.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements with the client.",
        taskDate: "2026-07-01",
        category: "Management",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create project progress presentation.",
        taskDate: "2026-07-02",
        category: "Presentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy the latest version to production.",
        taskDate: "2026-06-29",
        category: "Deployment",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem("Employees", JSON.stringify(employees))
    localStorage.setItem("Admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('Employees'))
    const admin = JSON.parse(localStorage.getItem('Admin'))
    return {employees, admin}
}
