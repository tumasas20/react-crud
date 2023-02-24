import React from 'react';
import { Container } from '@mui/material';
import ApiService from 'services/api-service';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import FilmCard from './film-card';
import routes from '../../navigation/routes';

const HomePage = () => {
  const [films, setFilms] = React.useState<FilmModel[]>([]);
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await ApiService.deleteFilm(id);
    const fetchedFilms = await ApiService.fectchFilms();
    setFilms(fetchedFilms);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedFilms = await ApiService.fectchFilms();
      setFilms(fetchedFilms);
    })();
  }, []);

  return (
    <Container sx={{ my: 6 }}>
      <Button sx={{ color: 'green' }} variant="outlined" onClick={() => navigate(routes.FilmFormPage)}>
        Sukurti filmą
      </Button>
      <Styled.FilmsGrid>
        {films.map((filmProps) => (
          <FilmCard
            key={filmProps.id}
            {...filmProps}
            onDelete={() => handleDelete(filmProps.id)}
          />
        ))}
      </Styled.FilmsGrid>
    </Container>
  );
};
export default HomePage;
