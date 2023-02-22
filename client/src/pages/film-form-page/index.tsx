import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ImagesField from './images-field';
import RatingField from './rating-field';
import ActorField from './actor-field';
import * as Styled from './styled';

const FilmFormPage = () => (
  <Styled.PageLayout>
    <Styled.Paper elevation={6}>
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <LocalMoviesIcon sx={{ fontSize: 60, color: 'success.main' }} />
        <Typography variant="h4" color="success.main">Create Movie</Typography>
        <TextField
          label="Title"
          fullWidth
          variant="filled"
          size="small"
        />
        <ActorField />
        <TextField
          label="Year"
          type="number"
          fullWidth
          variant="filled"
          size="small"
        />
        <ImagesField />
        <RatingField />
        <Button variant="contained" color="success" size="large" fullWidth>Create</Button>
      </Stack>
    </Styled.Paper>

  </Styled.PageLayout>
);

export default FilmFormPage;
