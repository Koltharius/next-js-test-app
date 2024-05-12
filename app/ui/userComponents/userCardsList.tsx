'use client';

import { fetchListOfUsers } from '@/app/lib/data';
import { ApiResponse, User } from '@/app/lib/definitions';
import UserCard from '@/app/ui/userComponents/userCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import UserCardSkeleton from '../skeleton/userCardSkeleton';

// UserCardList component
export default function UserCardList() {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchListOfUsers(page).then((response) => {
      setApiResponse(response);
    });
  }, [page]);

  const listOfUsers = apiResponse?.data as User[];

  return (
    <Box className="w-full">
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {!listOfUsers && <UserCardSkeleton />}
        {listOfUsers &&
          listOfUsers.map(({ first_name, last_name, email, avatar, id }) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <UserCard
                key={id}
                first_name={first_name}
                last_name={last_name}
                email={email}
                avatar={avatar}
                id={id}
              />
            </Grid>
          ))}
      </Grid>

      {listOfUsers?.length > 0 && (
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          className="p-4 h-32 w-full flex justify-center items-center"
        >
          <Pagination
            count={apiResponse?.total_pages}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
          />
        </Stack>
      )}
    </Box>
  );
}
