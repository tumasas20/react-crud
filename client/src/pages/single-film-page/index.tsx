import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  Box,
  styled,
  IconButton,
  Stack,
  Typography,
  Paper,
  Container,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from 'components/ui/img';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import routes from 'navigation/routes';
import Rating from '@mui/material/Rating';
import ApiService from '../../services/api-service';

const StyledSwiper = styled(Swiper)({
  with: '100%',
  height: '100%',
});

const SingleFilmPage = () => {
  const leftArrowRef = React.useRef<HTMLButtonElement | null>(null);
  const rightArrowRef = React.useRef<HTMLButtonElement | null>(null);
  const { id } = useParams();
  const [film, setFilm] = React.useState<undefined | FilmModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedFilm = await ApiService.fectchFilm(id);
        setFilm(fetchedFilm);
      })();
    }
  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (film === undefined) return null;
  return (
    <Box>
      <Container>
        <Paper sx={{
          my: 4,
          p: 4,
          bgcolor: '#d0ece7',
          width: 1,
        }}
        >
          <Box sx={{ textAlign: 'center', textTransform: 'uppercase', pb: 1 }}>
            <Typography letterSpacing={2} variant="h4">{film.title}</Typography>
          </Box>
          <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Stack>
              <Stack sx={{ flexDirection: 'row', gap: 2 }}>
                <Typography variant="subtitle2" letterSpacing={1}>Year:</Typography>
                <Typography letterSpacing={1}>{film.year}</Typography>
              </Stack>
              <Stack sx={{ flexDirection: 'row', gap: 2 }}>
                <Typography variant="subtitle2" letterSpacing={1}>Starting:</Typography>
                <Typography sx={{ color: '#038e76' }} letterSpacing={1}>{film.actor.fullname}</Typography>
              </Stack>
              <Stack sx={{ flexDirection: 'row', gap: 2 }}>
                <Typography variant="subtitle2" letterSpacing={1}>Acting as:</Typography>
                <Typography letterSpacing={1}>{film.actor.role}</Typography>
              </Stack>
            </Stack>
            <Stack>
              <Stack sx={{ flexDirection: 'row', gap: 2 }}>
                <Typography>IMDB:</Typography>
                <Typography sx={{ color: '#038e76' }}>{film.rating}</Typography>
              </Stack>
              <Rating value={film.rating} />
            </Stack>
          </Stack>
        </Paper>
      </Container>
      <Container>
        <Box
          sx={{
            width: (theme) => ({
              xs: '476px',
              sm: theme.breakpoints.values.sm,
              md: theme.breakpoints.values.md,
              lg: theme.breakpoints.values.lg,
              xl: theme.breakpoints.values.lg,
            }),
            height: 400,
            margin: 'auto',
            position: 'relative',
            pr: 6,
          }}
        >
          <StyledSwiper
            modules={[Pagination, Navigation]}
            loop
            pagination={{ dynamicBullets: true }}
            navigation={{
              enabled: true,
              nextEl: rightArrowRef.current,
              prevEl: leftArrowRef.current,
            }}
          >
            {film.images.map((img) => (
              <SwiperSlide key={img}>
                <Img
                  src={img}
                  sx={{
                    height: 1,
                    width: (theme) => ({
                      xs: 1,
                      sm: theme.breakpoints.values.sm,
                      md: theme.breakpoints.values.md,
                      lg: theme.breakpoints.values.lg,
                      xl: theme.breakpoints.values.lg,
                    }),
                  }}
                />
              </SwiperSlide>
            ))}
          </StyledSwiper>
          <Stack sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 3000,
            justifyContent: 'center',
          }}
          >
            <IconButton ref={leftArrowRef}>
              <ArrowCircleLeftIcon sx={{ color: 'primary.main', fontSize: 30 }} />
            </IconButton>
          </Stack>
          <Stack sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            zIndex: 3000,
            justifyContent: 'center',
            pr: 6,
          }}
          >
            <IconButton ref={rightArrowRef}>
              <ArrowCircleRightIcon sx={{ color: 'primary.main', fontSize: 30 }} />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SingleFilmPage;
