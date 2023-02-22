import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import createId from 'uniqid';

const initialIds = [createId()];

const ImagesField = () => {
  const [imagesFieldIds, setImagesFieldIds] = React.useState<string[]>(initialIds);

  const addImgField = () => setImagesFieldIds([...imagesFieldIds, createId()]);
  const removeImgField = (id: string) => {
    if (imagesFieldIds.length > 1) {
      setImagesFieldIds(imagesFieldIds.filter((imgId) => imgId !== id));
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      <Typography component="legend">Images</Typography>
      <Stack sx={{ gap: 2 }}>
        {imagesFieldIds.map((id) => (
          <TextField
            key={id}
            label="Image"
            name="images"
            fullWidth
            variant="filled"
            size="small"
            InputProps={imagesFieldIds.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImgField(id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}
      </Stack>
      <IconButton onClick={addImgField}>
        <AddCircleIcon sx={{ fontSize: 38, color: 'success.main' }} />
      </IconButton>
    </Box>
  );
};
export default ImagesField;
