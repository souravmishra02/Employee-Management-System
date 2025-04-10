const employees = [
  {
    "id": 1,
    "first_name": "Vikram",
    "email": "employee1@example.com",
    "password": "123",

    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Prepare project report",
        "description": "Compile and prepare the Q1 project progress report.",
        "date": "2025-04-01",
        "category": "Reporting"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Fix login issue",
        "description": "Resolve the login bug affecting mobile users.",
        "date": "2025-03-28",
        "category": "Bug Fixing"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Client call prep",
        "description": "Missed preparing the agenda for client call.",
        "date": "2025-03-30",
        "category": "Communication"
      }
    ],
    "task_summary": { "active": 1, "new": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 2,
    "first_name": "Neha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Update user interface",
        "description": "Refresh UI colors and layout per feedback.",
        "date": "2025-04-02",
        "category": "Design"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Write test cases",
        "description": "Add unit tests for payment module.",
        "date": "2025-03-27",
        "category": "Testing"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Deploy on staging",
        "description": "Deployment failed due to config issues.",
        "date": "2025-03-29",
        "category": "Deployment"
      }
    ],
    "task_summary": { "active": 1, "new": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 3,
    "first_name": "Amit",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Write blog post",
        "description": "Create content for upcoming release.",
        "date": "2025-04-03",
        "category": "Marketing"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Team meeting notes",
        "description": "Document action items from last meeting.",
        "date": "2025-03-26",
        "category": "Documentation"
      }
    ],
    "task_summary": { "active": 1, "new": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "first_name": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Build prototype",
        "description": "Created basic prototype for internal tool.",
        "date": "2025-03-24",
        "category": "Development"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Feedback session",
        "description": "Schedule and host peer review meeting.",
        "date": "2025-04-04",
        "category": "HR"
      }
    ],
    "task_summary": { "active": 1, "new": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 5,
    "first_name": "Ravi",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Database optimization",
        "description": "Optimize SQL queries for user dashboard.",
        "date": "2025-04-01",
        "category": "Database"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "API Integration",
        "description": "Integrated third-party analytics API.",
        "date": "2025-03-25",
        "category": "Backend"
      },
      {
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "title": "Security review",
        "description": "Missed deadline for security audit.",
        "date": "2025-03-30",
        "category": "Security"
      }
    ],
    "task_summary": { "active": 1, "new": 1, "completed": 1, "failed": 1 }
  }
];

    
    
    const admin = [ {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }];
    

export const setLocalStrorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStrorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees')) 
   const admin = JSON.parse(localStorage.getItem('admin')) 
   return{employees,admin}

}




  