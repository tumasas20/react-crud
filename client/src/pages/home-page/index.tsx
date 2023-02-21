import React from 'react';
import { Container } from '@mui/material';
import ApiService from 'services/api-service';
import * as Styled from './styled';
import FilmCard from './film-card';

const HomePage = () => {
  const [films, setFilms] = React.useState<FilmModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedFilms = await ApiService.fectchFilms();
      setFilms(fetchedFilms);
    })();
  }, []);

  return (
    <Container sx={{ my: 6 }}>
      <Styled.FilmsGrid>
        {films.map((filmProps) => (<FilmCard key={filmProps.id} {...filmProps} />))}
      </Styled.FilmsGrid>
    </Container>
  );
};
export default HomePage;
