/* eslint-disable no-alert */
import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import ImagesField from './images-field';
import RatingField from './rating-field';
import ActorField from './actor-field';
import * as Styled from './styled';
import { getFilmFormValues } from './helpers';
import ApiService from '../../services/api-service';
import useFilm from '../../hooks/use-film';

const FilmFormPage = () => {
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();
  const { id } = useParams();
  const [film, loadingFilmData] = useFilm(id);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const values = getFilmFormValues(formRef.current);
      await ApiService.createFilm(values);
      navigate(routes.HomePage);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on form submit. Contact to system administrator.');
      }
    }
  };

  if (loadingFilmData) return null;

  console.log('atnaujiname duomenis');
  console.log(film);

  return (
    <Styled.PageLayout>
      <Styled.Paper elevation={6}>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <LocalMoviesIcon sx={{ fontSize: 60, color: 'success.main' }} />
          <Typography variant="h4" color="success.main">Create Movie</Typography>
          <TextField
            name="title"
            label="Title"
            fullWidth
            variant="filled"
            size="small"
            required
          />
          <ActorField />
          <TextField
            name="year"
            label="Year"
            type="number"
            fullWidth
            variant="filled"
            size="small"
            required
          />
          <ImagesField />
          <RatingField />
          <Button
            variant="contained"
            color="success"
            size="large"
            fullWidth
            type="submit"
          >
            Create
          </Button>
        </Stack>
      </Styled.Paper>

    </Styled.PageLayout>
  );
};
export default FilmFormPage;
