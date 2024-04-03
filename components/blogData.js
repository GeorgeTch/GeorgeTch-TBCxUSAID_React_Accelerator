const blogData = [
  {
    id: 1,
    title: "Introduction to React.js",
    description: "Learn the basics of React.js and its key concepts.",
    photo:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
    publishDate: "2024-03-27",
    readMoreLink: "https://reactjs.org/docs/getting-started.html",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms: A Beginner's Guide",
    description: "Explore fundamental data structures and algorithms concepts.",
    photo:
      "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
    publishDate: "2024-03-25",
    readMoreLink: "https://www.geeksforgeeks.org/data-structures/",
  },
  {
    id: 3,
    title: "Building a Laptop E-commerce Website with React",
    description:
      "Learn how to build an e-commerce website for selling laptops using React.",
    photo:
      "https://plus.unsplash.com/premium_photo-1663054500009-d4fc1a8ad953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWN0fGVufDB8fDB8fHww",
    publishDate: "2024-03-24",
    readMoreLink: "https://reactjs.org/docs/getting-started.html",
  },
  {
    id: 4,
    title: "Machine Learning Basics: An Introduction",
    description: "Get started with machine learning and its basic principles.",
    photo:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
    publishDate: "2024-03-22",
    readMoreLink: "https://machinelearningmastery.com/start-here/#algorithms",
  },
  {
    id: 5,
    title: "React Hooks: Simplifying State Management",
    description:
      "Explore how React hooks revolutionize state management in React applications.",
    photo:
      "https://media.istockphoto.com/id/1449171785/photo/young-it-specialist-working-at-pc-at-home-debugging-java-script-cyber-space-error.webp?b=1&s=170667a&w=0&k=20&c=3ihdFIZQEwRX4fYgFhIIq4jGINJyv5CPuZ7JRo4ArIA=",
    publishDate: "2024-03-20",
    readMoreLink: "https://reactjs.org/docs/hooks-intro.html",
  },
  {
    id: 6,
    title: "Operating Systems Overview: Key Concepts",
    description: "Learn about the fundamental concepts of operating systems.",
    photo:
      "https://cdn.pixabay.com/photo/2015/01/20/13/25/monitor-605548_960_720.jpg",
    publishDate: "2024-03-18",
    readMoreLink: "https://www.tutorialspoint.com/operating_system/index.htm",
  },
  {
    id: 7,
    title: "React Native: Building Mobile Apps with React",
    description:
      "Get started with React Native and learn to build cross-platform mobile applications.",
    photo:
      "https://cdn.pixabay.com/photo/2016/10/12/17/42/iphone-1734647_960_720.jpg",
    publishDate: "2024-03-16",
    readMoreLink: "https://reactnative.dev/docs/getting-started",
  },
  {
    id: 8,
    title: "Web Development Fundamentals: HTML, CSS, JavaScript",
    description:
      "Learn the basics of web development with HTML, CSS, and JavaScript.",
    photo:
      "https://cdn.pixabay.com/photo/2017/08/10/07/32/laptop-2617745_960_720.jpg",
    publishDate: "2024-03-14",
    readMoreLink: "https://developer.mozilla.org/en-US/docs/Learn",
  },
  {
    id: 9,
    title: "Computer Networks: Understanding the Basics",
    description: "Explore the fundamental concepts of computer networks.",
    photo:
      "https://cdn.pixabay.com/photo/2016/02/13/13/11/aurora-1197750_960_720.jpg",
    publishDate: "2024-03-12",
    readMoreLink: "https://www.geeksforgeeks.org/computer-network-tutorials/",
  },
  {
    id: 10,
    title: "Responsive Web Design: Building Mobile-Friendly Websites",
    description:
      "Learn how to create responsive web designs that work well on all devices.",
    photo:
      "https://cdn.pixabay.com/photo/2015/01/13/15/43/laptop-599527_960_720.jpg",
    publishDate: "2024-03-10",
    readMoreLink: "https://www.w3schools.com/css/css_rwd_intro.asp",
  },
  {
    id: 11,
    title: "Frontend Development Trends: What's New?",
    description: "Stay updated with the latest trends in frontend development.",
    photo:
      "https://cdn.pixabay.com/photo/2017/12/21/13/14/notebook-3037808_960_720.jpg",
    publishDate: "2024-03-08",
    readMoreLink: "https://www.freecodecamp.org/news/",
  },
  {
    id: 12,
    title: "React Performance Optimization Techniques",
    description:
      "Discover techniques and tips for optimizing performance in React applications.",
    photo:
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/computer-1839878_960_720.jpg",
    publishDate: "2024-03-06",
    readMoreLink:
      "https://blog.bitsrc.io/how-to-optimise-react-applications-performance-22e020dec711",
  },
  {
    id: 13,
    title: "Artificial Intelligence: An Overview",
    description:
      "Get an introduction to artificial intelligence and its applications.",
    photo:
      "https://cdn.pixabay.com/photo/2016/11/08/05/10/robot-1805192_960_720.jpg",
    publishDate: "2024-03-04",
    readMoreLink:
      "https://www.ibm.com/cloud/learn/what-is-artificial-intelligence",
  },
  {
    id: 14,
    title: "JavaScript Frameworks Comparison: React vs Vue vs Angular",
    description:
      "Compare popular JavaScript frameworks and choose the right one for your project.",
    photo:
      "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
    publishDate: "2024-03-02",
    readMoreLink: "https://www.codecademy.com/articles/react-vs-vue-vs-angular",
  },
  {
    id: 15,
    title: "Web Security Best Practices: Protecting Your Applications",
    description:
      "Learn about essential web security practices to safeguard your applications.",
    photo:
      "https://cdn.pixabay.com/photo/2018/01/10/21/24/laptop-3076957_960_720.jpg",
    publishDate: "2024-02-29",
    readMoreLink: "https://developer.mozilla.org/en-US/docs/Web/Security",
  },
  {
    id: 16,
    title: "React Testing: Strategies and Tools",
    description:
      "Discover different strategies and tools for testing React applications effectively.",
    photo:
      "https://cdn.pixabay.com/photo/2017/07/31/11/31/book-2550263_960_720.jpg",
    publishDate: "2024-02-27",
    readMoreLink: "https://www.valentinog.com/blog/testing-react/",
  },
  {
    id: 17,
    title: "Introduction to Node.js: Backend Development with JavaScript",
    description:
      "Get started with Node.js and learn to build backend applications using JavaScript.",
    photo:
      "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg",
    publishDate: "2024-02-25",
    readMoreLink: "https://nodejs.dev/learn",
  },
  {
    id: 18,
    title: "Cloud Computing Basics: An Introduction",
    description:
      "Learn about the fundamentals of cloud computing and its benefits.",
    photo:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",
    publishDate: "2024-02-23",
    readMoreLink:
      "https://azure.microsoft.com/en-us/overview/what-is-cloud-computing/",
  },
  {
    id: 19,
    title:
      "React Native Navigation: Navigation Solutions for React Native Apps",
    description:
      "Explore various navigation solutions for React Native applications.",
    photo:
      "https://cdn.pixabay.com/photo/2016/02/19/10/00/software-1209823_960_720.jpg",
    publishDate: "2024-02-21",
    readMoreLink: "https://reactnavigation.org/docs/getting-started/",
  },
  {
    id: 20,
    title: "Laptop Maintenance Tips: Keeping Your Device Running Smoothly",
    description:
      "Discover tips and tricks for maintaining your laptop's performance and longevity.",
    photo:
      "https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg",
    publishDate: "2024-03-19",
    readMoreLink:
      "https://www.lifewire.com/maintaining-laptop-computer-1522778",
  },
];

export default blogData;
