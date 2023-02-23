import React from 'react';
import { TextField, Box } from '@mui/material';

const ActorField = () => (
  <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
    <TextField
      label="Actor fullname"
      name="fullname"
      fullWidth
      variant="filled"
      size="small"
      required
    />
    <TextField
      name="role"
      label="Role"
      fullWidth
      variant="filled"
      size="small"
      required
    />
  </Box>
);

export default ActorField;
