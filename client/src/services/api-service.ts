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
  const { data } = await api.get<FilmModel[]>('/films');

  return data;
};

const fectchFilm = async (id: string | number) => {
  const { data } = await api.get<FilmModel>(`/films/${id}`);

  return data;
};

const createFilm = async (filmData: Omit<FilmModel, 'id'>) => {
  const { data } = await api.post<FilmModel>('/films', filmData);

  return data;
};
const updateFilm = async (id: string | number, filmData: Omit<FilmModel, 'id'>) => {
  const { data } = await api.patch<FilmModel[]>(`/films/${id}`, filmData);

  return data;
};

const deleteFilm = async (id: string | number) => {
  const { data } = await api.delete<FilmModel[]>(`/films/${id}`);

  return data;
};

const ApiService = {
  fectchFilms,
  fectchFilm,
  createFilm,
  updateFilm,
  deleteFilm,
};

export default ApiService;
