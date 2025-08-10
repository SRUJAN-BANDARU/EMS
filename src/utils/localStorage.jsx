const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Create API Endpoint",
        "description": "Develop the user authentication API.",
        "date": "2025-08-12",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix Login Bug",
        "description": "Resolve session timeout issues in login.",
        "date": "2025-08-08",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Prepare Documentation",
        "description": "Write technical documentation for the API.",
        "date": "2025-08-10",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "UI Design Update",
        "description": "Revamp dashboard UI with new layout.",
        "date": "2025-08-15",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Add Search Feature",
        "description": "Implement search functionality in the dashboard.",
        "date": "2025-08-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Deploy to Staging",
        "description": "Push the new code to staging environment.",
        "date": "2025-08-09",
        "category": "Deployment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "API Load Test",
        "description": "Run load testing on the API.",
        "date": "2025-08-07",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Create Database Schema",
        "description": "Design schema for new project database.",
        "date": "2025-08-12",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Optimize Queries",
        "description": "Improve SQL queries performance.",
        "date": "2025-08-08",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Backup Failure Fix",
        "description": "Resolve backup failure issue.",
        "date": "2025-08-05",
        "category": "Maintenance"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Prepare Test Cases",
        "description": "Create unit test cases for new module.",
        "date": "2025-08-13",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Integrate Payment Gateway",
        "description": "Add PayPal and Stripe integration.",
        "date": "2025-08-16",
        "category": "Integration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update Dependencies",
        "description": "Upgrade all npm packages to latest version.",
        "date": "2025-08-09",
        "category": "Maintenance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Server Migration",
        "description": "Migrate project to new server.",
        "date": "2025-08-06",
        "category": "Deployment"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Client Demo",
        "description": "Prepare demo for client meeting.",
        "date": "2025-08-12",
        "category": "Presentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Bug Fixing Sprint",
        "description": "Resolve priority bugs in bug tracker.",
        "date": "2025-08-08",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Security Audit",
        "description": "Conduct penetration testing for app.",
        "date": "2025-08-05",
        "category": "Security"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return {employees, admin}
}