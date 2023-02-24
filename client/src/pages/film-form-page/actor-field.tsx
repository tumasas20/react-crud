import React from 'react';
import {
  TextField,
  Box,
  TextFieldProps,
} from '@mui/material';

  type ActorFieldProps = {
    color: TextFieldProps['color'],
    defaultRole?: string,
    defaultFullname?: string,
  };

const ActorField: React.FC<ActorFieldProps> = ({
  color,
  defaultRole,
  defaultFullname,
}) => (
  <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
    <TextField
      label="Actor fullname"
      name="fullname"
      fullWidth
      variant="filled"
      size="small"
      required
      color={color}
      defaultValue={defaultFullname}
    />
    <TextField
      name="role"
      label="Role"
      fullWidth
      variant="filled"
      size="small"
      required
      color={color}
      defaultValue={defaultRole}
    />
  </Box>
);

export default ActorField;
