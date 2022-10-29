import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const GridSkeleton = () => {
  return (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton
        variant='rectangular'
        width={1400}
        height={700}
        animation='wave'
      />
    </Box>
  );
};

export default GridSkeleton;
