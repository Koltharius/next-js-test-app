import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

// UserCardSkeleton component
// This component is used to create a skeleton loading effect for user cards
// It uses the Skeleton component from Material UI to create the skeleton effect
export default function UserCardSkeleton() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Skeleton
            variant="rectangular"
            className="h-44 w-96 rounded-xl"
            animation="wave"
          />
        </Grid>
      ))}
    </>
  );
}
