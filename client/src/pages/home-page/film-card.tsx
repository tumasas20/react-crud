import React from 'react';
import { Typography, Stack } from '@mui/material';
import Rating from '@mui/material/Rating';
import Img from '../../components/ui/img';
import * as Styled from './styled';

type FilmCardProps = filmModel;

const FilmCard: React.FC<FilmCardProps> = ({
  id,
  title,
  year,
  actor,
  images,
  rating,
}) => {
  const value = rating;

  return (
    <Stack sx={{ boxShadow: 3 }}>
      <Img sx={{ aspectRatio: '1.42', width: 1 }} src={images[0]} alt="" />
      <Styled.FilmCardContent>

        <Typography>Number: </Typography>
        <Typography>{id}</Typography>

        <Typography variant="h6">Title: </Typography>
        <Typography variant="subtitle1">{title}</Typography>

        <Typography>Year: </Typography>
        <Typography>{year}</Typography>

        <Typography>Actor: </Typography>
        <Typography>
          <Stack sx={{ flexGrow: 1 }}>
            <Typography sx={{ color: '#038e76' }}>{actor.fullname}</Typography>

            played by:
            <Typography sx={{ color: '#038e76' }}>{actor.role}</Typography>

          </Stack>
        </Typography>

        <Rating name="read-only" value={value} readOnly />
        <Typography sx={{ color: '#038e76' }}>{rating}</Typography>

      </Styled.FilmCardContent>
    </Stack>
  );
};
export default FilmCard;
