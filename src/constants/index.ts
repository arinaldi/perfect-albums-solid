export const BASE_URL = import.meta.env.VITE_API_URL;

export const GQL_URL = `${BASE_URL}/graphql`;

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const ROUTES = [
  { href: '/top-albums', label: 'Top Albums' },
  { href: '/featured-songs', label: 'Featured Songs' },
  { href: '/new-releases', label: 'New Releases' },
];

export const ROUTES_ADMIN = {
  base: { href: '/admin', label: 'Admin' },
  create: { href: '/admin/create', label: 'Admin Create' },
  edit: { href: '/admin/edit', label: 'Admin Edit' },
  delete: { href: '/admin/delete', label: 'Admin Delete' },
};
