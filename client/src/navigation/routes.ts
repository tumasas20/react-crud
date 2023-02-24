const singleFilmPageRoot = '/film/';
const updateFilmPageRoot = '/update-film/';

const staticRoutes = {
  HomePage: '/',
  FilmFormPage: '/create-film',
} as const;

const dynamicRoutes = {
  SingleFilmPage: {
    path: `${singleFilmPageRoot}:id`,
    createLink: (id: string | number) => `${singleFilmPageRoot}${id}`,
  },
  UpdateFilmPage: {
    path: `${updateFilmPageRoot}:id`,
    createLink: (id: string | number) => `${updateFilmPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

//     protingas budas
// export type Routes = typeof routes;
// export type RouteLink = {
//   [Key in keyof Routes]: Routes[Key] extends string ? Routes[Key] : never
// }[keyof Routes];

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;
