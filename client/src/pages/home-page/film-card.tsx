import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Img from '../../components/ui/img';
import * as Styled from './styled';

type FilmCardProps = FilmModel;

const FilmCard: React.FC<FilmCardProps> = ({
  id,
  title,
  year,
  actor,
  images,
  rating,
}) => {
  const value = rating;
  const navigate = useNavigate();

  return (
    <Stack sx={{ boxShadow: 3, position: 'relative' }}>
      <Styled.ActionButton>
        <Button
          variant="contained"
          color="warning"
          size="small"
          sx={{ minWidth: 'initial', p: 0.5 }}
          onClick={() => navigate(routes.UpdateFilmPage.createLink(id))}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{ minWidth: 'initial', p: 0.5 }}
          onClick={() => console.log(`vygdomas trynimas '${id}'`)}
        >
          <DeleteIcon />
        </Button>
      </Styled.ActionButton>

      <Img sx={{ aspectRatio: '1.42', width: 1 }} src={images[0]} alt="" />
      <Styled.FilmCardContent>
        <Stack sx={{ p: 1 }}>
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <Stack sx={{ flexDirection: 'row', gap: 1 }}>
          <Typography>Year:</Typography>
          <Typography>{year}</Typography>
        </Stack>
        <Stack sx={{ flexGrow: 1, flexDirection: 'row', gap: 1 }}>
          <Typography>Actor:</Typography>
          <Typography sx={{ color: '#038e76' }}>{actor.fullname}</Typography>
        </Stack>
        <Stack sx={{ flexGrow: 1, flexDirection: 'row', gap: 1 }}>
          <Typography>Acting:</Typography>
          <Typography sx={{ color: '#038e76' }}>{actor.role}</Typography>
        </Stack>
        <Stack sx={{
          flexGrow: 1, flexDirection: 'row', gap: 1, pt: 1,
        }}
        >
          <Typography>IMDB:</Typography>
          <Typography sx={{ color: '#038e76' }}>{rating}</Typography>
        </Stack>
        <Rating name="read-only" value={value} readOnly />
        <Button
          color="success"
          variant="outlined"
          sx={{ mt: 3 }}
          onClick={() => navigate(routes.SingleFilmPage.createLink(id))}
        >
          See more
        </Button>

      </Styled.FilmCardContent>
    </Stack>
  );
};
export default FilmCard;
