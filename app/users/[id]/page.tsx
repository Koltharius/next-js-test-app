import UserDetails from '@/app/ui/userComponents/userDetail';
import { roboto } from '@/app/ui/fonts';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Details',
};

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;

  return (
    <main>
      <Box className="flex flex-grow flex-col">
        <Typography
          variant="h1"
          component="h1"
          className={`${roboto.className} pb-4 text-xl font-semibold md:text-2xl`}
        >
          User Details
        </Typography>
        <Box className="flex w-full flex-col items-center rounded-xl bg-gray-100 p-4">
          <UserDetails id={id} />
          <Button variant="contained" color="primary" href="/">
            Back
          </Button>
        </Box>
      </Box>
    </main>
  );
}
