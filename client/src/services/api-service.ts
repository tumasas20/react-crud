import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
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

const createFilm = async (filmData: Omit<FilmModel, 'id'>) => {
  const response = await api.post<FilmModel>('/films', filmData);
  return response.data;
};

const ApiService = {
  fectchFilms,
  fectchFilm,
  createFilm,
};

export default ApiService;
