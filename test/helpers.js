const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Omar El Tarzi',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Omar El Tarzi',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Omar El Tarzi',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Omar El Tarzi',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Omar El Tarzi',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
