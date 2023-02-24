import React from 'react';
import ApiService from 'services/api-service';

const useFilm = (id: string | undefined) => {
  const [film, setFilm] = React.useState<undefined | FilmModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedHouse = await ApiService.fectchFilm(id);
        setFilm(fetchedHouse);
        setLoading(false);
      })();
    }
  }, []);

  return [film, loading] as const;
};

export default useFilm;
