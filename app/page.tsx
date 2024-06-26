import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';
import UserCardList from './ui/userComponents/userCardsList';
import { roboto } from './ui/fonts';

export const metadata: Metadata = {
  title: 'List of Users',
};

export default async function Page() {
  return (
    <main>
      <Box className="flex flex-grow flex-col">
        <Typography
          variant="h1"
          component="h1"
          className={`${roboto.className} mb-4 text-xl font-semibold md:text-2xl`}
        >
          List of Users
        </Typography>
        <Box className="w-full">
          <UserCardList />
        </Box>
      </Box>
    </main>
  );
}
