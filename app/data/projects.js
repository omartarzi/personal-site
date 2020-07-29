// TODO Add a couple lines about each project
const data = [
  {
    title: 'Blue Checks',
    subtitle: 'A Community Mobile App',
    // link: '/projects/nearestdollar/',
    image: '/images/projects/bluechecks.jpg',
    date: '2020-06-23',
    desc: 'Built for social impact by reviewing and reporting information and experiences with public figures. Created a login and sign up that allows users to find the members of their local command staff. ',
  }, {
    title: 'Lululemon',
    subtitle: 'Web-Scale System Design',
    link: 'https://www.lululemon.com',
    image: '/images/projects/lululemon.jpg',
    date: '2020-05-08',
    desc: 'Increased data set from 100 unique records to 10 million unique records and deployed to AWS EC2 to support elastic load balancing. Tested query times between MongoDB and PostgreSQL and optimized with indexing to reduce queries to an average of under 15ms per request. Horizontally scaled the requests per second capability from one EC2 instance with 1700rps, 0% errorrate,and 67ms average response time,up to 4 EC2 instances with 10,000 rps, 0% error rate, and 12ms average response time via creation of a load balancer.',
  }, {
    title: 'Nixon',
    subtitle: 'E-Commerce Front-End Clone.',
    link: 'http://www.nixon.com',
    image: '/images/projects/nixon.jpg',
    date: '2020-04-01',
    desc: 'Implemented a review functionality to allow users to view and write reviews for a database of 100 unique and dynamic records. Linked 3 modules and databases onto a single-page using a service-oriented architecture. Deployed to AWS EC2 to support elastic load balancing.',
  },
  //{
  //   title: 'Cat Detector',
  //   subtitle: 'A convolutional neural network to classify cats! (and dogs)',
  //   link: '/project/catdetector/',
  //   image: '/images/projects/catdetector.jpg',
  //   date: '2015-05-15',
  //   desc: 'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
  //    + 'Over 60,000 cats were classified before server bills made the project too expensive '
  //    + 'to continue hosting.',
  // },
];

export default data;
