const singleFilmPageRoot = '/film/';

const routes = {
  HomePage: '/',
  FilmFormPage: '/create-film',
  SingleFilmPage: {
    path: `${singleFilmPageRoot}:id`,
    createLink: (id: string | number) => `${singleFilmPageRoot}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
