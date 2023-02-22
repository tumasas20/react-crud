import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page';
import routes from './routes';
import SingleFilmPage from '../pages/single-film-page/index';
import FilmFormPage from '../pages/film-form-page/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.FilmFormPage,
        element: <FilmFormPage />,
      },
      {
        path: routes.SingleFilmPage.path,
        element: <SingleFilmPage />,
      },
    ],
  },
]);

export default router;
