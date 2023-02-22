import React from 'react';
import { TextField, Box } from '@mui/material';

const ActorField = () => (
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
);

export default ActorField;
