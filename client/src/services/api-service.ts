import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fectchFilms = async () => {
  const response = await api.get<FilmModel[]>('/films');

  return response.data;
};

const fectchFilm = async (id: string | number) => {
  const response = await api.get<FilmModel>(`/films/${id}`);

  return response.data;
};

const ApiService = {
  fectchFilms,
  fectchFilm,
};

export default ApiService;
