// Single source of truth for all portfolio content.
// Update this file to change any text, link, or data shown on the site.

export const personal = {
  name: 'Mohit Shinde',
  title: 'Java Full Stack Developer',
  location: 'Pune, Maharashtra, India',
  email: 'mohitshinde991@gmail.com',
  phone: '+91 7020899644',
  phoneHref: 'tel:+917020899644',
  github: 'https://github.com/Mohit1257',
  linkedin: 'https://www.linkedin.com/in/mohit-shinde-8b5200262',
  resumePath: '/resume/Mohit-Shinde-Resume.pdf',
  resumeFileName: 'Mohit-Shinde-Resume.pdf',
  techLine: 'Java · Spring Boot · Spring Security · REST APIs · MySQL · React.js',
  status: 'Open to entry-level opportunities',

  summary:
    "Java Full Stack Developer with hands-on experience building web applications using Java, Spring Boot, Hibernate, REST APIs, MySQL, and React.js. I enjoy developing backend APIs, integrating databases, implementing authentication and authorization, and creating responsive, user-friendly interfaces.",

  about:
    "I'm Mohit Shinde, a Java Full Stack Developer based in Pune, Maharashtra. I work mainly with Java, Spring Boot, Spring MVC, Spring Security, Hibernate ORM, REST APIs, MySQL, HTML, CSS, JavaScript, and React.js. I enjoy developing backend APIs, integrating databases, implementing authentication and authorization, and building responsive web applications. I'm currently looking for an entry-level Java Developer / Java Full Stack Developer opportunity where I can apply my technical skills, learn from experienced developers, and grow as a software developer.",

  openToWork:
    "I'm currently seeking an entry-level Java Developer / Java Full Stack Developer opportunity where I can contribute, learn, and grow as a software developer.",
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    title: 'Languages & Core',
    items: [
      'Java',
      'OOPs Concepts',
      'Collections Framework',
      'Multithreading',
      'Exception Handling',
      'SQL',
    ],
  },
  {
    title: 'Web Technologies',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js (Basic)',
    ],
  },
  {
    title: 'Frameworks & Backend',
    items: [
      'Spring',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Hibernate ORM',
      'JDBC',
      'REST APIs',
    ],
  },
  {
    title: 'Database',
    items: [
      'MySQL',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Maven',
      'Postman',
      'VS Code',
      'Eclipse',
    ],
  },
]

export const projects = [
  {
    id: 'worksphere',
    name: 'WorkSphere',
    subtitle: 'Company Operations & Employee Self-Service Web Portal',

    description:
      'WorkSphere is a company operations and employee self-service web portal built using Java, Spring Boot, Thymeleaf, Spring Security, Hibernate ORM, and MySQL.',

    roles: [
      'Admin',
      'HR',
      'Manager',
      'Employee',
    ],

    functionalAreas: [
      'Employee Management',
      'Department Management',
      'Project Management',
      'Task Management',
      'Leave Management',
      'Expense Management',
      'Document Management',
      'Announcement Management',
    ],

    highlights: [
      'Implemented role-based authentication and authorization using Spring Security and BCrypt.',
      'Built using Controller-Service-Repository architecture.',
      'Responsive role-based dashboards built with Thymeleaf, HTML, CSS, JavaScript, and Bootstrap.',
    ],

    tech: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate ORM',
      'Thymeleaf',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Maven',
      'Git',
      'GitHub',
    ],

    github: 'https://github.com/Mohit1257/WorkSphere',
  },

  {
    id: 'teamsphere',
    name: 'TeamSphere',
    subtitle: 'Employee Directory & Skills Portal',

    description:
      "TeamSphere is an Employee Directory & Skills Portal built with Java 21 and Spring Boot. It allows users to browse and search a company's employees, while administrators can manage employees, departments, and skills.",

    roles: [
      'Admin',
      'User',
    ],

    functionalAreas: [
      'Employee Management',
      'Department Management',
      'Skills Management',
      'Employee Directory',
      'Employee Search',
      'User Authentication',
      'Role-Based Access Control',
    ],

    highlights: [
      'Implemented user authentication and role-based access control using Spring Security.',
      'Built employee, department, and skills management functionality for administrators.',
      'Implemented employee browsing and search functionality.',
      'Used server-side rendering with Thymeleaf for the web interface.',
    ],

    tech: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate ORM',
      'Thymeleaf',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Maven',
      'Git',
      'GitHub',
    ],

    github: 'https://github.com/Mohit1257/TeamSphere',
  },

  {
    id: 'campushub',
    name: 'CampusHub',
    subtitle: 'Student Attendance Management System',

    description:
      'Developed a full-stack student attendance management system using React, Spring Boot, Hibernate, and MySQL, supporting 4 core modules.',

    roles: [
      'Admin',
      'Faculty',
    ],

    functionalAreas: [
      'User Management',
      'Student Management',
      'Subject Management',
      'Attendance Management',
    ],

    highlights: [
      'Built 18 RESTful API endpoints for User, Student, Subject, and Attendance modules, enabling CRUD operations and attendance tracking.',
      'Implemented role-based authentication and protected routing for Admin and Faculty users with separate dashboards and permission-based workflows.',
      'Created responsive React interfaces for student, subject, user, and attendance management, integrating Axios-based APIs with reusable UI components.',
    ],

    tech: [
      'Java',
      'Spring Boot',
      'Hibernate ORM',
      'MySQL',
      'React.js',
      'REST API',
      'HTML',
      'CSS',
      'JavaScript',
    ],

    github: 'https://github.com/Mohit1257/CampusHub',
  },

  {
    id: 'modern-employee-tracker',
    name: 'Modern Employee Tracker',
    subtitle: 'Full-Stack Employee Management System',

    description:
      'Modern Employee Tracker is a full-stack employee management system built with Java 17, Spring Boot, Hibernate, JPA, JSP/JSTL, and MySQL 8.',

    roles: [],

    functionalAreas: [
      'Employee CRUD (add, edit, delete)',
      'Employee status toggle',
      'Department management',
      'Interactive dashboard',
    ],

    highlights: [
      'Developed an interactive dashboard using Chart.js 4.4 with animated counters, a department-wise bar chart, and an active/inactive employee donut chart.',
      'Implemented employee lifecycle operations including add, edit, delete, and status toggle with form validation and a custom confirmation modal.',
      'Created a responsive employee listing page with search, department/status filters, sorting, pagination, and a persistent dark/light theme toggle.',
    ],

    tech: [
      'Core Java',
      'Java 17',
      'Spring Boot',
      'Spring Boot MVC',
      'Hibernate ORM',
      'JPA',
      'MySQL 8',
      'JSP',
      'JSTL',
      'HTML',
      'CSS',
      'JavaScript',
      'Chart.js 4.4',
      'Maven',
    ],

    github: 'https://github.com/Mohit1257/ModernEmployeeTracker',
  },
]

export const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'G H Raisoni College of Engineering and Management',
    location: 'Jalgaon',
    period: '2022 – 2026',
  },

  {
    degree: 'Higher Secondary Certificate (Science)',
    institution: 'D. G. B. Agri Vidyalay and Junior College',
    location: 'Kalambu',
    period: '2020 – 2022',
  },
]

export const certification = {
  title: 'Java Full Stack Certification',
  issuer: 'Kiran Academy, Pune',
}