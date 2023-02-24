import { styled, Stack } from '@mui/material';

export const FilmsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  maxWidth: theme.breakpoints.values.xl,
  margin: 'auto',
  paddingLeft: 0,
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const FilmCardContent = styled(Stack)(({ theme }) => ({
  backgroundColor: '#d0ece7',
  padding: theme.spacing(2),
  flexGrow: 1,
  width: '100%',
}));

export const ActionButton = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 10,
  top: 150,
  display: 'flex',
  gap: theme.spacing(0.5),
}));
