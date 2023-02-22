import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Paper,
  Box,
  InputAdornment,
  IconButton,
  Button,
  Rating,
} from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const FilmFormPage = () => (
  <Stack sx={{
    py: { xs: 2, sm: 6, xl: 10 },
    px: 2,
    alignItems: 'center',
  }}
  >
    <Paper
      component="form"
      elevation={6}
      sx={{
        p: 3,
        bgcolor: '#d0ece7',
        width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }),
      }}
    >
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <LocalMoviesIcon sx={{ fontSize: 60, color: 'success.main' }} />
        <Typography variant="h4" color="success.main">Create Movie</Typography>
        <TextField
          label="Title"
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
          <TextField
            label="Actor"
            fullWidth
            variant="filled"
            size="small"
          />
          <TextField
            label="Role"
            fullWidth
            variant="filled"
            size="small"
          />
        </Box>
        <TextField
          label="Year"
          type="number"
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ width: 1 }}>
          <Typography component="legend">Images</Typography>
          <Stack sx={{ gap: 2 }}>
            <TextField
              label="Image"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Image"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <IconButton>
            <AddCircleIcon sx={{ fontSize: 38, color: 'success.main' }} />
          </IconButton>
        </Box>

        <Box sx={{ alignSelf: 'flex-start' }}>
          <Typography component="legend">Rating</Typography>
          <Rating />
        </Box>
        <Button variant="contained" color="success" size="large" fullWidth>Create</Button>
      </Stack>
    </Paper>

  </Stack>
);

export default FilmFormPage;
