import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

// UserDetailsSkeleton component
// This component is used to create a skeleton loading effect for user details
// It uses the Skeleton component from Material UI to create the skeleton effect
export default function UserDetailsSkeleton() {
  return (
    <Skeleton
      className="h-80 w-full rounded-xl"
      variant="rectangular"
      animation="wave"
    />
  );
}
