export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Online Shopping Platform',
    description: 'A comprehensive e-commerce solution with product listings, user accounts, shopping cart, and rentals based products',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'fullstack',
    technologies: ['Java', 'Spring Boot', 'HTML', 'CSS', 'MySQL'],
    githubUrl: 'https://github.com/rangadaschakravarthy/Online_Shopping',
  },
  {
    id: 2,
    title: 'E-Learning Platform',
    description: 'A productivity application designed to help users learn new Technologies as well as practice those concepts in a user-friendly environment',
    image: 'https://1.bp.blogspot.com/-ziAd1ezK5tQ/Xw7ZtKHWiEI/AAAAAAAACVs/gE3yJS-Tch8LEbo4RiEfmIBhtg3hBK1DwCLcBGAsYHQ/s1500/E-Learning-online%2Beducation.jpg',
    category: 'fullstack',
    technologies: ['Python', 'Flask', 'HTML', 'CSS','MySQL','BootStrap'],
    githubUrl: 'https://github.com/rangadaschakravarthy/E-Learning',
  },
  {
    id: 3,
    title: 'Travel Agency',
    description: 'A full-stack web application that enables users to explore travel destinations, book tours, manage itineraries, and view trip details with real-time updates.',
    image: '/agency.jpg',
    category: 'fullstack',
    technologies: ['Java', 'Spring Boot', 'HTML', 'CSS','MySQL','BootStrap'],
    githubUrl: 'https://github.com/rangadaschakravarthy/Travel_Agency',
  },
  {
    id: 4,
    title: 'Vehicle Rentals',
    description: 'A full-featured vehicle rental platform where users can browse available vehicles, filter by type or location, make bookings, and manage reservations.',
    image: 'https://th.bing.com/th/id/OIP.T8IuvKFoovkCW_iKimJ0-gHaE8?rs=1&pid=ImgDetMain',
    category: 'fullstack',
    technologies: ['Python', 'Flask', 'MySQL', 'HTML/CSS'],
    githubUrl: 'https://github.com/rangadaschakravarthy/Vehicle_Rentals',
  },
  {
    id: 5,
    title: 'Finance Tracker',
    description: 'An interactive weather application that provides current conditions, forecasts, and historical data for locations worldwide.',
    image: '/finance.jpg',
    category: 'frontend',
    technologies: ['React.js', 'HTML/CSS', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/rangadaschakravarthy/Finance-Tracker',
  }
];